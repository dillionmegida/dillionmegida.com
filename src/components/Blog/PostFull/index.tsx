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

type Props = {
  data: {
    markdownRemark: GqlPostFull
  }
}

export default ({ data }: Props) => {
  const post = data.markdownRemark
  const notMonetized = post.frontmatter.monetize === false ? true : false
  return (
    <Layout>
      <Helmet
        pageTitle={`${post.frontmatter.title} - Dillion's Blog`}
        pageLink={post.fields.slug}
        pageDesc={post.frontmatter.pageDescription}
        pageKeywords={post.frontmatter.pageKeywords}
        imageCard={post.frontmatter.cover}
        largeTwitterCard={true}
      >
        {notMonetized && (
          <meta name="monetization" content="$ilp.uphold.com/89fH6XniNm9R" />
        )}
      </Helmet>

      <main className={Styles.BlogPost}>
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
          {post.frontmatter.cover && post.frontmatter.cover !== "" ? (
            <img src={post.frontmatter.cover} alt="Blog Cover" width="100%" />
          ) : null}
          <div className={Styles.BlogContent}>
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
      </main>
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
        monetize
        questions {
          name
          options
          answer
        }
      }
    }
  }
`
