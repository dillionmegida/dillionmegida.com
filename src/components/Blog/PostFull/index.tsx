import React from "react"
import { Link, graphql } from "gatsby"
import AnchorLink from "../../AnchorLink"
import Layout from "../BlogLayout"
import Disqus from "../disqus"
import { formatBlogDate } from "../../../utils/dates"
import ShareArticle from "../ShareArticle"
// import QuestionForm from "question-form"
// import "question-form/dist/index.css"

import { GqlPostFull } from "../../../interfaces/Post"
import Helmet from "../../Helmet"
import styled from "styled-components"

type Props = {
  data: {
    markdownRemark: GqlPostFull
  }
}

const Main = styled.main`
  // for heading links
  .anchor.before {
    fill: var(--mainColor2);

    svg {
      visibility: visible;
    }
  }

  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 20px;
  color: white;

  h1 {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 20px 0 0; // for a little offset
    color: white;
  }

  iframe {
    width: 100%;
  }

  .blog-title {
    font-size: 40px;

    @media (max-width: 400px) {
      font-size: 30px;
    }
  }

  .blog-tags {
    font-size: 20px;
    margin: 0 0 20px;

    a {
      margin-right: 10px;
    }
  }

  .blog-date {
    font-weight: 400;
    opacity: 0.8;
    font-size: 18px;
  }

  .blog-info {
    border-bottom: 1px solid var(--mainColor1);
  }

  .video-text {
    margin: 20px 0;
  }

  .blog-cover {
    border: 1px solid var(--mainColor2);
  }

  .blog-content {
    font-size: 22px;

    /* Markdown custom styles */

    a {
      word-break: break-all;
      color: var(--secondary-color);
      text-decoration: underline;
    }

    img {
      width: 100%;
    }

    b,
    strong {
      font-weight: 500;
    }

    p {
      line-height: 1.8;
      margin: 20px 0 20px;
    }

    & div[class="gatsby-highlight"] {
      // margin: 0.5em 0;
      margin: 0 -20px;
      overflow: auto;
      &::-webkit-scrollbar {
        height: 7px;
      }

      & pre[class*="language-"] {
        // to control overlap start
        overflow: initial;
        float: left;
        // end
        min-width: 100%;
        margin: 0;
        border-radius: 0;
      }
    }

    & span[class="gatsby-highlight-code-line"] {
      background-color: rgb(68, 68, 68);
      display: block;
      border-left: 0.25em solid #f99;
      color: pink !important;
      margin-left: -1em;
      margin-right: -1em;
      padding: 0 1em 0 0.75em;
    }

    & blockquote {
      border: 2px solid var(--tertiary-color);
      margin: 20px 0;
      padding: 0 20px;
      color: white;
      opacity: 0.8;
    }

    & ul,
    & ol {
      margin: 0;
      padding: 0 25px;
      & li {
        padding: 0;
        margin: 15px 0;
        line-height: 1.5;
        & a {
          margin: 0;
          padding: 0;
        }
      }
      & p {
        // p automatically appears when
        // I want to create a sublist, and the margin
        // disrupts the list
        margin: 0;
      }
    }

    & ul li {
      list-style-type: initial;
      line-height: 1.7;
    }

    & code[class="language-text"] {
      color: var(--mainColor1);
      background-color: rgb(227, 227, 227);
      padding: 3px 6px;
      border-radius: 3px;
      font-family: monospace;
      color: #333;
      font-weight: lighter;
    }
  }
`

export default ({ data }: Props) => {
  const post = data.markdownRemark

  const { cover: postCover, canonicalLink } = post.frontmatter
  const postCoverUrl = postCover
    ? postCover.startsWith("https")
      ? postCover
      : `/post-covers/${postCover}`
    : null

  return (
    <Layout>
      <Helmet
        pageTitle={`${post.frontmatter.title} - Dillion's Blog`}
        pageLink={canonicalLink ?? post.fields.slug}
        pageDesc={post.frontmatter.pageDescription}
        pageKeywords={post.frontmatter.pageKeywords}
        imageCard={postCoverUrl}
        largeTwitterCard={!!postCoverUrl}
      />

      <Main>
        <article>
          <div className="blog-info">
            <h1 className="blog-title">{post.frontmatter.title}</h1>
            <p className="blog-date">
              {formatBlogDate(post.frontmatter.date)} |{" "}
              {`${post.timeToRead} min${post.timeToRead > 1 ? "s" : ""} read`}
            </p>
            {post.frontmatter.tags ? (
              <p className="blog-tags">
                {post.frontmatter.tags.map((tag, index) => (
                  <AnchorLink key={`${tag}_${index}`} link={`/tags/${tag}`}>
                    #{tag}
                  </AnchorLink>
                ))}
              </p>
            ) : null}
          </div>
          {postCoverUrl ? (
            <img
              className="blog-cover"
              src={postCoverUrl}
              alt="Blog Cover"
              width="100%"
            />
          ) : null}
          <div className="blog-content">
            {post.frontmatter.video && (
              <p className="video-text">
                Here's a video if you'd prefer that:{" "}
                <a href={post.frontmatter.video}>{post.frontmatter.video}</a>
              </p>
            )}
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </article>

        {post.frontmatter.questions && (
          <>
            <h2>Exercise questions</h2>
            {/* <QuestionForm
              questions={post.frontmatter.questions}
              color="var(--mainColor1)"
            /> */}
          </>
        )}

        {/* Sharing the article with media APIs */}
        <p
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            margin: "30px 0 0",
            fontFamily: "var(--main-font)",
          }}
        >
          Share this article
        </p>
        <ShareArticle url={post.fields.slug} title={post.frontmatter.title} />
        <hr />

        <Disqus
          url={post.fields.slug}
          postId={post.id}
          postTitle={post.frontmatter.title}
        />
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      timeToRead
      frontmatter {
        title
        date
        readTime
        pageDescription
        pageKeywords
        cover
        tags
        video
        canonicalLink
        questions {
          name
          options
          answer
        }
      }
    }
  }
`
