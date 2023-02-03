import React from "react"
import Styles from "./index.module.scss"

import { graphql } from "gatsby"
import Post from "../PostMini"
import Layout from "../BlogLayout"
import Helmet from "../../Helmet"

type Props = {
  pageContext: {
    tag: string
  }
  data: {
    allMarkdownRemark: {
      totalCount: number
      edges: {
        node: {
          id: string
          fields: { slug: string }
          frontmatter: {
            title: string
            date: Date
          }
          readTime: number
          excerpt: string
        }
      }[]
    }
  }
}

const Tags = ({ pageContext, data }: Props) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `#${tag} - ${totalCount} post${totalCount === 1 ? "" : "s"}`

  return (
    <Layout>
      <Helmet
        pageTitle={`Blog Posts tagged with #${tag} - Dillion's Blog`}
        pageLink={`/tags/${tag}`}
        pageDesc={`Blog Posts tagged with #${tag} in Dillion's Blog`}
        pageKeywords={`${tag}, dillion megida, dillion, megida, web developer, web development, frontend, javascript`}
      />
      <main className={Styles.TagMain}>
        <h2 className={Styles.TagHeader}>{tagHeader}</h2>
        <section className="Blogs">
          {edges.map(({ node }) => {
            const { readTime } = node
            const { slug } = node.fields
            const { title, date } = node.frontmatter
            return (
              <article key={node.id} className="Blog">
                <Post
                  href={slug}
                  title={title}
                  date={date}
                  readTime={readTime}
                  content={node.excerpt}
                />
              </article>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            readTime
          }
          excerpt
        }
      }
    }
  }
`
