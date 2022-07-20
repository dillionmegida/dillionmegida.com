import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../BlogLayout"
import Disqus from "../disqus"
import { formatBlogDate } from "../../../utils/dates"
import ShareArticle from "../ShareArticle"
import QuestionForm from "question-form"
import "question-form/dist/index.css"

import Styles from "./index.module.scss"
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

  a {
    position: relative;
    color: white;
    transition: color 300ms;
    --color: var(--mainColor2);
    display: inline-block;
    color: var(--mainColor2);

    @media (max-width: 600px) {
      color: var(--color);
    }

    &:not(.anchor)::after {
      content: "";
      position: absolute;
      width: 40%;
      height: 1px;
      background-color: var(--color);
      bottom: 3px;
      left: 0;
      transition: width 300ms;
    }

    &:hover {
      color: var(--color);
      &::after {
        width: 100%;
      }
    }
  }

  iframe {
    width: 100%;
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

      <Main className={Styles.BlogPost}>
        <article>
          <div className={Styles.BlogInfo}>
            <h1 className={Styles.BlogTitle}>{post.frontmatter.title}</h1>
            <p className={Styles.BlogDate}>
              {formatBlogDate(post.frontmatter.date)} |{" "}
              {`${post.timeToRead} min${post.timeToRead > 1 ? "s" : ""} read`}
            </p>
            {post.frontmatter.tags ? (
              <p className={Styles.BlogTags}>
                {post.frontmatter.tags.map((tag, index) => (
                  <Link key={`${tag}_${index}`} to={`/tags/${tag}`}>
                    #{tag}
                  </Link>
                ))}
              </p>
            ) : null}
          </div>
          {postCoverUrl ? (
            <img
              className={Styles.BlogCover}
              src={postCoverUrl}
              alt="Blog Cover"
              width="100%"
            />
          ) : null}
          <div className={Styles.BlogContent}>
            {post.frontmatter.video && (
              <p className={Styles.VideoText}>
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
            <QuestionForm
              questions={post.frontmatter.questions}
              color="var(--mainColor1)"
            />
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
