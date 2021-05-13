import React, { useEffect, useState } from "react"
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
import queryString from "query-string"
import { changeWithoutReloading } from "../../utils/url"

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

const commonTags = ["all", "gatsby", "node", "javascript", "react"]

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
  params: string
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
  params,
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

  const updateParamsUrl = ({
    tag = activeTag,
    query = activeQuery,
  }: {
    tag?: string
    query?: string
  }) => {
    changeWithoutReloading(
      null,
      "",
      "?tag=" + tag + (query.length > 0 ? "&query=" + query : "")
    )
  }

  const { tag = null, query = null } = queryString.parse(params)

  useEffect(() => {
    if (tag || query) {
      if (tag) setActiveTag(tag as string)
      if (query) setActiveQuery(query as string)

      onQuery((query as string) || activeQuery, (tag as string) || activeTag)
    }
  }, [])

  const onQuery = (val: string, tag: string = "all") => {
    const valReg = new RegExp(val, "ig")
    const tagReg = new RegExp(tag, "ig")
    const contents: AllContentsQql[] = []

    const isActiveTagAll = tag === "all" || !commonTags.includes(tag)

    allContents.forEach((c, i) => {
      contents[i] = { edges: [] }
      c.edges.forEach(({ node }, j) => {
        contents[i].edges[j] = { node: { ...node, content: [] } }

        node.content.forEach(item => {
          const tagStr = item.tags?.join("") as string

          if (
            (valReg.test(item.title) || (item.tags && valReg.test(tagStr))) &&
            (isActiveTagAll
              ? true
              : tagReg.test(item.title) || tagReg.test(tagStr))
          ) {
            contents[i].edges[j].node.content.push(item)
          }
        })
      })
    })

    setContents(contents)

    const articles = allArticlesOnThisWebsite.edges.filter(({ node }) => {
      const {
        frontmatter: { title, tags },
      } = node
      const tagsStr = tags?.join("") as string

      return (
        (valReg.test(title) || valReg.test(tagsStr)) &&
        (isActiveTagAll ? true : tagReg.test(title) || tagReg.test(tagsStr))
      )
    })

    setArticles(articles)
  }

  let totalContentsLength = 0,
    filteredContentsLength = 0

  function updateContentsLength(
    content: AllContentsQql,
    type: "total" | "filtered"
  ) {
    content.edges.forEach(({ node }) =>
      type === "total"
        ? (totalContentsLength += node.content.length)
        : (filteredContentsLength += node.content.length)
    )
  }

  allContents.forEach(c => updateContentsLength(c, "total"))
  allArticlesOnThisWebsite.edges.forEach(() => (totalContentsLength += 1))

  contents.forEach(c => updateContentsLength(c, "filtered"))
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
              setActiveTag(tag)
              updateParamsUrl({ tag })
              onQuery(activeQuery, tag)
            }}
            activeTag={activeTag}
            commonTags={commonTags}
            onQuery={val => {
              setActiveQuery(val)
              updateParamsUrl({ query: val })
              onQuery(val, activeTag)
            }}
            defaultValue={activeQuery}
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
                    items={node.content.reverse().map(({ title, link }) => ({
                      title,
                      link,
                    }))}
                  />
                )
              })
            )}
            {articles.reverse().length < 1 ? null : (
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
