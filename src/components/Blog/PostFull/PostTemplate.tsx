import React, { ReactNode } from "react"
import styled from "styled-components"
import Layout from "../../Layout"
import Helmet from "../../Helmet"
import ShareArticle from "../ShareArticle"
import Disqus from "../disqus"
import AnchorLink from "../../AnchorLink"
import { formatBlogDate } from "../../../utils/dates"
import CodeBlock from "../../mdx/CodeBlock"
import CodePreview from "../../mdx/CodePreview"
import Info from "../../mdx/Info"
import { MDXProvider } from "@mdx-js/react"
import { GqlPostFull } from "../../../interfaces/Post"

const Main = styled.main`
  // for heading links
  .anchor.before {
    fill: var(--mainColor2);

    svg {
      visibility: visible;
    }
  }

  font-size: clamp(1rem, 5vw, 1.5rem);

  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 20px;
  color: white;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 20px 0 0; // for a little offset
    color: white;
    line-height: 100%;
  }

  iframe {
    width: 100%;
  }

  .blog-title {
    margin: 0 0 20px;
    font-size: clamp(1.5rem, 7vw, 4rem);
    color: #dedcdc;
    line-height: 1.2;
  }


  .blog-date {
    font-weight: 400;
    opacity: 0.8;
    margin: 0 0 5px;
    font-size: 18px;
  }

  .blog-tags {
    font-size: 0.7em;
    margin: 0 0 20px;

    a {
      margin-right: 10px;
    }
  }


  .blog-info {
    border-bottom: 1px solid var(--mainColor1);
  }

  .video-text {
    margin: 20px 0;
  }

  .blog-cover {
    border: 2px solid #3a3e4d;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
  }

  .blog-content {
    color: var(--text-color);

    /* Markdown custom styles */

    a {
      /* word-break: break-all; */
      color: var(--secondary-color);
      text-decoration: underline;
    }

    hr {
      border-color: #909090;
      margin: 20px 0;
    }

    b,
    strong {
      font-weight: 500;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0.8em 0 0.3em;
    }

    p {
      line-height: 1.5;
      margin: 0.8em 0 0.3em;
    }

    h2 {
      font-size: clamp(1.5rem, 7vw, 3rem);
      color: #dedcdc;
    }

    h3 {
      font-size: clamp(1.2rem, 7vw, 2.3rem);
      color: #dedcdc;
    }

    .language-text {
      font-size: calc(100% - 3px);
    }

    & div[class="gatsby-highlight"] {
      margin: 20px 0;
      border: 1px solid #909090;
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
        /* margin: 5px 0 15px; */
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

const components = {
  code: CodeBlock,
  CodePreview,
  Info,
}

type Props = {
  post: GqlPostFull
  children?: ReactNode
}

export default function PostTemplate({ post, children }: Props) {
  const {
    id,
    frontmatter: {
      cover: postCover,
      video,
      title,
      date,
      pageDescription: description,
      pageKeywords: keywords,
      questions,
      tags,
    },
    fields: { slug },
  } = post

  const cover = postCover
    ? postCover.startsWith("https")
      ? postCover
      : `/post-covers/${postCover}`
    : null

  return (
    <Layout>
      <Helmet
        pageTitle={`${title} - Dillion's Blog`}
        pageLink={slug}
        pageDesc={description}
        pageKeywords={keywords}
        imageCard={cover}
        largeTwitterCard={!!cover}
      />
      <Main>
        <article>
          <div className="blog-info">
            <h1 className="blog-title">{title}</h1>
            <p className="blog-date">
              {formatBlogDate(date)}
              {/* |{" "} */}
              {/* {`${post.timeToRead} min${post.timeToRead > 1 ? "s" : ""} read`} */}
            </p>
            {tags ? (
              <p className="blog-tags">
                {tags?.map((tag, index) => (
                  <AnchorLink key={`${tag}_${index}`} link={`/tags/${tag}`}>
                    #{tag}
                  </AnchorLink>
                ))}
              </p>
            ) : null}
          </div>
          {cover ? (
            <img
              className="blog-cover"
              src={cover}
              alt="Blog Cover"
              width="100%"
            />
          ) : null}
          <div className="blog-content">
            {video && (
              <p className="video-text">
                Here's a video if you'd prefer that: <a href={video}>{video}</a>
              </p>
            )}
            {post.html && (
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            )}
            {children && (
              // expected from mdx
              <MDXProvider components={components}>{children}</MDXProvider>
            )}
          </div>
        </article>

        {questions && (
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
        <ShareArticle url={slug} title={title} />
        <hr />

        <Disqus url={slug} postId={id} postTitle={title} />
      </Main>
    </Layout>
  )
}
