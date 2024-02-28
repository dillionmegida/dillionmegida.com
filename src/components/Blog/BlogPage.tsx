import React from "react"

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
    group: GqlPostFull[]
    featuredArticles: { node: GqlPostFull }[]
  }
}

const Main = styled.main`
  width: 100%;
  padding: 30px 20px;
  margin: 0 auto;
  max-width: 700px;

  .section-heading {
    margin-top: 20px;
    color: #dedcdc;
    position: relative;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      width: 100%;

      &::after {
        content: "";
        position: absolute;
        width: 50px;
        height: 1px;
        background-color: var(--mainColor2);
        left: 0;
        bottom: 0;
      }
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

const SearchSection = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: flex-end;

  a {
    color: #dedcdc;
    border: 1px solid #dedcdc;
    padding: 15px;

    &:hover {
      border-color: var(--mainColor2);
    }
  }
`

const Pagination = styled.div`
  margin: 20px 0;
  font-size: clamp(0.9rem, 6vw, 1.2rem);
  height: 20px;

  a {
    color: var(--mainColor2);

    &:is(:focus, :hover) {
      text-decoration: none;
    }

    &.previous {
      float: left;
    }

    &.next {
      float: right;
    }
  }
`

const { meta } = constants

export default function BlogPage({ pageContext }: Props) {
  const { index: pageIndex, featuredArticles } = pageContext
  const isFirst = pageContext.index === 1
  const isLast = pageContext.last
  const prevPage =
    !isFirst && pageIndex - 1 === 1 ? "/blog" : `/blog/${pageIndex - 1}`
  const nextPage = !isLast ? `/blog/${pageContext.index + 1}` : ""

  return (
    <Layout>
      <Helmet pageTitle={meta.TITLE} pageLink="/blog" pageDesc={meta.DESC} />
      <Main>
        <section>
          <div className="section-heading">
            <h1 id="all-articles">All articles</h1>

            <SearchSection>
              <Link to="/search" title="Search articles">
                <i className="fa fa-search"></i> Search articles
              </Link>
            </SearchSection>
          </div>
          {pageContext.group.map(node => (
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
        <Pagination>
          {!isFirst && (
            <Link
              className={"previous a-link inverse"}
              to={prevPage}
              rel="prev"
            >
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link className={"next a-link"} to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </Pagination>
      </Main>
    </Layout>
  )
}
