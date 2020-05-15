import React from "react"
import Styles from "./index.module.scss"

import { Link } from "gatsby"
import Post from "./PostMini"
import Layout from "./BlogLayout"

export default ({ pageContext }) => {
    const { index: pageIndex } = pageContext
    const isFirst = pageContext.index === 1
    const isLast = pageContext.last
    const prevPage = !isFirst && pageIndex - 1 === 1 ? "/" : pageIndex - 1
    const nextPage = !isLast && pageContext.index + 1

    return (
        <Layout
            PageTitle="Dillion Megida - Technical Writer and Front End Developer"
            PageLink="/"
            PageDescription="Dillion is a Frontend Developer, a Tecnical Writer and a Graphics Designer."
        >
            <main className={Styles.BlogMain}>
                <div className={Styles.SearchSection}>
                    <Link to="/search" title="Search articles">
                        <i className="fa fa-search"></i>
                    </Link>
                </div>
                <section>
                    {pageContext.group.map(({ node }) => (
                        <Post
                            key={node.id}
                            href={node.fields.slug}
                            title={node.frontmatter.title}
                            readTime={`${node.timeToRead} min${
                                node.timeToRead > 1 ? "s" : ""
                            }`}
                            date={node.frontmatter.date}
                            tags={node.frontmatter.tags}
                            content={
                                node.frontmatter.pageDescription.length > 150
                                    ? `${node.frontmatter.pageDescription.substr(
                                          0,
                                          150
                                      )}...`
                                    : node.frontmatter.pageDescription
                            }
                        />
                    ))}
                </section>
                {/* Pagination */}
                <div className={Styles.Pagination}>
                    {!isFirst && (
                        <Link
                            className={Styles.previous}
                            to={`/${prevPage}`}
                            rel="prev"
                        >
                            ← Previous Page
                        </Link>
                    )}
                    {!isLast && (
                        <Link
                            className={Styles.next}
                            to={`/${nextPage}`}
                            rel="next"
                        >
                            Next Page →
                        </Link>
                    )}
                </div>
            </main>
        </Layout>
    )
}
