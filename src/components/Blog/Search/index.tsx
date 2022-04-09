import React, { useEffect, useRef, useState } from "react"
import Styles from "./index.module.scss"

import { StaticQuery, graphql } from "gatsby"
import Post from "../PostMini"
import { GqlPost } from "../../../interfaces/Post"
import styled from "styled-components"
import Back from "../../Icon/Back"

const Main = styled.div`
  .header {
    display: flex;
    align-items: center;
    position: relative;
  }
  .back-btn {
    position: relative;
    left: -20px;
  }

  h1 {
    position: relative;
    left: -10px;
  }
`

type GqlPostModified = {
  node: GqlPost
}

const Search = () => {
  const searchInput = useRef<any>(null)

  useEffect(() => {
    if (searchInput.current) {
      searchInput.current.focus()
    }
  }, [])

  const [filteredArticles, setFilteredArticles] = useState<GqlPostModified[]>(
    []
  )

  const handleInput = (wholeArr: { edges: GqlPostModified[] }, event: any) => {
    const query = event.target.value.toLowerCase()

    // check if the query is blank because the every post will pass the filter test for an empty input
    if (query === "") {
      setFilteredArticles([])
      return
    }
    const posts = wholeArr.edges
    const filteredArr = posts.filter(post => {
      const { pageDescription, title, tags } = post.node.frontmatter

      return (
        pageDescription.toLowerCase().includes(query) ||
        title.toLowerCase().includes(query) ||
        tags
          ?.join("")
          .toLowerCase()
          .includes(query)
      )
    })
    setFilteredArticles(filteredArr)
  }

  const onClickBack = () => {
    if (!window) return

    window.history.back()
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          allPosts: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fields: { slug: { regex: "/^(/p/)/" } } }
          ) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  date
                  pageDescription
                  tags
                }
                timeToRead
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { allPosts } = data

        const filtered = filteredArticles

        return (
          <Main className={Styles.SearchMain}>
            <div className="container">
              <div className="header">
                <button onClick={onClickBack} className="back-btn">
                  <Back color="white" size={40} />
                </button>
                <h1>Search from {allPosts.totalCount} posts</h1>
              </div>
              <div className={Styles.Search}>
                <input
                  type="text"
                  placeholder="Search articles..."
                  onChange={event => {
                    handleInput(allPosts, event)
                  }}
                  ref={searchInput}
                />
              </div>
              {filtered.length !== 0 && (
                <p className={Styles.ResultCount}>
                  <b>{filtered.length}</b> result
                  {filtered.length !== 1 && "s"} found.
                </p>
              )}
              {filtered.length !== 0 ? (
                <section>
                  {filtered.map(({ node }) => (
                    <Post
                      href={node.fields.slug}
                      title={node.frontmatter.title}
                      readTime={node.timeToRead}
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
              ) : null}
            </div>
          </Main>
        )
      }}
    />
  )
}

export default Search
