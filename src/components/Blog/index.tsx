import React from "react"
import Styles from "./index.module.scss"

import { Link } from "gatsby"
import Post from "./PostMini"
import Layout from "./BlogLayout"
import { GqlPostFull } from "../../interfaces/Post"
import Helmet from "../Helmet"

type Props = {
  pageContext: {
    index: number
    last: boolean
    group: { node: GqlPostFull }[]
  }
}

export default ({ pageContext }: Props) => {
  const { index: pageIndex } = pageContext
  const isFirst = pageContext.index === 1
  const isLast = pageContext.last
  const prevPage =
    !isFirst && pageIndex - 1 === 1 ? "/blog" : `/blog/${pageIndex - 1}`
  const nextPage = !isLast ? `/blog/${pageContext.index + 1}` : ""

  return (
    <Layout>
      <Helmet
        pageTitle="Dillion Megida - Frontend Engineer and Technical Writer"
        pageLink="/"
        pageDesc="Dillion is a Frontend Engineer and a Tecnical Writer learning, teaching and buiding web applications with JavaScript."
      />
      <main className={Styles.BlogMain}>
        <div className={Styles.SearchSection}>
          <Link to="/search" title="Search articles">
            <i className="fa fa-search"></i> Search articles
          </Link>
        </div>
        <section>
          {pageContext.group.map(({ node }) => (
            <Post
              key={node.id}
              href={node.fields.slug}
              title={node.frontmatter.title}
              readTime={node.timeToRead}
              date={node.frontmatter.date}
              tags={node.frontmatter.tags}
              content={
                node.frontmatter.pageDescription.length > 150
                  ? `${node.frontmatter.pageDescription.substr(0, 150)}...`
                  : node.frontmatter.pageDescription
              }
            />
          ))}
        </section>
        {/* Pagination */}
        <div className={Styles.Pagination}>
          {!isFirst && (
            <Link className={Styles.previous} to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link className={Styles.next} to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </div>
      </main>
    </Layout>
  )
}
