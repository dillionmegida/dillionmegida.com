import React from "react"
import Styles from "./index.module.scss"

import { Link } from "gatsby"
import Post from "./PostMini"
import Layout from "./BlogLayout"
import { GqlPostFull } from "../../interfaces/Post"
import Helmet from "../Helmet"
import constants from "../../constants"
import styled from "styled-components"

type Props = {
  pageContext: {
    index: number
    last: boolean
    group: { node: GqlPostFull }[]
    featuredArticles: { node: GqlPostFull }[]
  }
}

const Main = styled.main`
  .section-heading {
    color: white;
    position: relative;
    padding: 20px 0 0;

    &::after {
      content: "";
      position: absolute;
      width: 50px;
      height: 1px;
      background-color: var(--mainColor2);
      left: 0;
      bottom: -10px;
    }
  }

  .go-to-all {
    display: block;
    margin-top: 20px;
    /* text-decoration: underline; */
    color: var(--mainColor2);

    &:hover {
      text-decoration: underline;
    }
  }

  .featured-section {
    margin-bottom: 80px;
  }
`

const { meta } = constants

export default ({ pageContext }: Props) => {
  const { index: pageIndex, featuredArticles } = pageContext
  const isFirst = pageContext.index === 1
  const isLast = pageContext.last
  const prevPage =
    !isFirst && pageIndex - 1 === 1 ? "/blog" : `/blog/${pageIndex - 1}`
  const nextPage = !isLast ? `/blog/${pageContext.index + 1}` : ""

  return (
    <Layout>
      <Helmet pageTitle={meta.TITLE} pageLink="/blog" pageDesc={meta.DESC} />
      <Main className={Styles.BlogMain}>
        <div className={Styles.SearchSection}>
          <Link to="/search" title="Search articles">
            <i className="fa fa-search"></i> Search articles
          </Link>
        </div>

        {/* {isFirst && (
          <section className="featured-section">
            <h2 className="section-heading">Featured articles</h2>
            <Link className="go-to-all" to="#all-articles">
              Go to all articles
            </Link>
            {featuredArticles.map(({ node }) => (
              <Post
                key={node.id}
                href={node.fields.slug}
                title={node.frontmatter.title}
                readTime={node.timeToRead}
                date={node.frontmatter.date}
                tags={node.frontmatter.tags}
                content={
                  node.frontmatter.pageDescription.length > 150
                    ? `${node.frontmatter.pageDescription.substring(0, 150)}...`
                    : node.frontmatter.pageDescription
                }
              />
            ))}
          </section>
        )} */}
        <section>
          {isFirst && (
            <h2 id="all-articles" className="section-heading">
              All articles
            </h2>
          )}
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
                  ? `${node.frontmatter.pageDescription.substring(0, 150)}...`
                  : node.frontmatter.pageDescription
              }
            />
          ))}
        </section>
        {/* Pagination */}
        <div className={Styles.Pagination}>
          {!isFirst && (
            <Link
              className={`${Styles.previous} a-link inverse`}
              to={prevPage}
              rel="prev"
            >
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link className={`${Styles.next} a-link`} to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </div>
      </Main>
    </Layout>
  )
}
