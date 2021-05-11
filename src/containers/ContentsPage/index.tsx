import React, { useState } from "react"
import { AllContentsQql } from "../../interfaces/Contents"
import styled from "styled-components"
import Masonry from "react-masonry-css"
import { AllPostsGql } from "../../interfaces/Post"
import useMedia from "use-media"
import ContentBlock from "./ContentBlock"
import FeaturedContent from "./FeaturedContent"
import SearchInput from "./SearchInput"
import { pluralize } from "../../utils/string"
import classNames from "classnames"

const Main = styled.main`
  width: 100%;
  margin: 0 auto;

  .heading-bg {
    width: 100%;
    background-color: var(--lightBlue);

    &-wrapper {
      max-width: 1200px;
      width: 100%;
      padding: 20px;
      margin: 0 auto;
      display: flex;
      align-items: center;

      h1 {
        margin-right: 50px;
        flex: 1;
      }

      .count {
        font-size: 20px;
        letter-spacing: 1px;
        font-weight: bold;
        width: 120px;
      }

      @media (max-width: 450px) {
        flex-wrap: wrap;

        h1 {
          margin-right: 0;
          width: 100%;
          flex: none;
        }
      }
    }
  }

  .main-content {
    padding: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .search-input-container {
    margin: 20px 0 0;
  }

  .filtered-count {
    height: 30px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    &.hidden {
      visibility: hidden;
    }
  }

  .contents-container {
    margin-top: 20px;
    .my-masonry-grid {
      display: flex;
      margin-left: -30px;
      width: auto;
    }
    .my-masonry-grid_column {
      padding-left: 30px;
      background-clip: padding-box;
    }

    .my-masonry-grid_column > div {
      margin-bottom: 50px;
    }
  }
`

const commonTags = ["all", "gatsby", "node", "javascript"]

type Props = {
  youtube: AllContentsQql
  devto: AllContentsQql
  edpresso: AllContentsQql
  logrocket: AllContentsQql
  soshace: AllContentsQql
  vonage: AllContentsQql
  fcc: AllContentsQql
  podcast: AllContentsQql
  talk: AllContentsQql
  kirupa: AllContentsQql
  allArticlesOnThisWebsite: AllPostsGql
}

export default function ContentsPage({
  youtube,
  devto,
  edpresso,
  logrocket,
  soshace,
  vonage,
  fcc,
  kirupa,
  podcast,
  talk,
  allArticlesOnThisWebsite,
}: Props) {
  const allContents = [
    logrocket,
    youtube,
    podcast,
    vonage,
    kirupa,
    edpresso,
    soshace,
    talk,
    fcc,
    devto,
  ]

  const [contents, setContents] = useState(allContents)
  const [articles, setArticles] = useState(allArticlesOnThisWebsite.edges)
  const [activeQuery, setActiveQuery] = useState("")
  const [activeTag, setActiveTag] = useState("all")

  const onQuery = (val: string, tag: string = "") => {
    setActiveQuery(val)

    const valReg = new RegExp(val, "ig")
    const tagReg = new RegExp(tag, "ig")
    const contents: AllContentsQql[] = []

    allContents.forEach((c, i) => {
      contents[i] = { edges: [] }
      c.edges.forEach(({ node }, j) => {
        contents[i].edges[j] = { node: { ...node, content: [] } }

        node.content.forEach(item => {
          if (
            valReg.test(item.title) &&
            (tag === "all" ? true : tagReg.test(item.title))
          ) {
            contents[i].edges[j].node.content.push(item)
          }
        })
      })
    })

    setContents(contents)

    const articles = allArticlesOnThisWebsite.edges.filter(
      ({ node }) =>
        valReg.test(node.frontmatter.title) &&
        (tag === "all" ? true : tagReg.test(node.frontmatter.title))
    )

    setArticles(articles)
  }

  let totalContentsLength = 0,
    filteredContentsLength = 0

  function updateTotalContentsLength(content: AllContentsQql) {
    content.edges.forEach(
      ({ node }) => (totalContentsLength += node.content.length)
    )
  }

  allContents.forEach(c => updateTotalContentsLength(c))
  allArticlesOnThisWebsite.edges.forEach(() => (totalContentsLength += 1))

  function updateFilteredContentsLength(content: AllContentsQql) {
    content.edges.forEach(
      ({ node }) => (filteredContentsLength += node.content.length)
    )
  }

  contents.forEach(c => updateFilteredContentsLength(c))
  articles.forEach(() => (filteredContentsLength += 1))

  const isWiderThan800 = useMedia({ minWidth: 1000 })

  const isWiderThan600 = useMedia({ minWidth: 600 })

  return (
    <Main>
      <div className="heading-bg">
        <div className="heading-bg-wrapper">
          <h1>All my contents in one place ✨</h1>
          <span className="count">Total: {totalContentsLength}+</span>
        </div>
      </div>
      <div className="main-content">
        {/* <FeaturedContent /> */}
        <div className="search-input-container">
          <SearchInput
            onClickTag={tag => {
              if (commonTags.includes(tag)) {
                setActiveTag(tag)
                onQuery(activeQuery, tag)
              }
            }}
            activeTag={activeTag}
            commonTags={commonTags}
            onQuery={onQuery}
          />
        </div>
        <span
          className={classNames("filtered-count", {
            hidden: activeTag === "all" && activeQuery.length < 1,
          })}
        >
          {filteredContentsLength} {pluralize("result", filteredContentsLength)}
        </span>
        <div className="contents-container">
          <Masonry
            breakpointCols={isWiderThan800 ? 3 : isWiderThan600 ? 2 : 1}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {contents.map(c =>
              c.edges.map(({ node }) => {
                if (node.content.length < 1) return null

                return (
                  <ContentBlock
                    key={node.platform}
                    heading={{ title: node.platform, link: node.link }}
                    items={node.content.map(({ title, link }) => ({
                      title,
                      link,
                    }))}
                  />
                )
              })
            )}
            {articles.length < 1 ? null : (
              <ContentBlock
                heading={{ title: "dillionmegida.com", link: "/" }}
                items={articles.map(
                  ({
                    node: {
                      frontmatter: { title },
                      fields: { slug },
                    },
                  }) => ({ title, link: slug })
                )}
              />
            )}
          </Masonry>
        </div>
      </div>
    </Main>
  )
}
