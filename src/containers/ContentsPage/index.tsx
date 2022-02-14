import React, { useEffect, useState } from "react"
import { AllContentsGql } from "../../interfaces/Contents"
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
import { NewTabLink } from "../../components/Link"
import constants from "../../constants"

const Main = styled.main`
  width: 100%;
  margin: 0 auto;

  .heading-bg {
    width: 100%;
    background-color: var(--lightBlue);

    &-wrapper {
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
        width: 140px;
        font-family: var(--main-font);
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

  .starter-section {
    background-color: var(--mainColor1);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-align: center;
  }

  .starter-link {
    font-weight: bold;
    text-decoration: underline;
    color: white;
  }
`

const commonTags = ["all", "gatsby", "node", "javascript", "react", "writing"]
const contentTypes = ["all", "post", "talk", "video", "podcast"]

type Props = {
  youtube: AllContentsGql
  videos: AllContentsGql
  deeecode: AllContentsGql
  codesource: AllContentsGql
  devto: AllContentsGql
  edpresso: AllContentsGql
  logrocket: AllContentsGql
  stw: AllContentsGql
  soshace: AllContentsGql
  vonage: AllContentsGql
  stream: AllContentsGql
  fcc: AllContentsGql
  podcast: AllContentsGql
  talk: AllContentsGql
  kirupa: AllContentsGql
  egghead: AllContentsGql
  strapi: AllContentsGql
  allArticlesOnThisWebsite: AllPostsGql
  params: string
}

export default function ContentsPage({
  youtube,
  devto,
  edpresso,
  logrocket,
  stw,
  soshace,
  codesource,
  vonage,
  fcc,
  kirupa,
  podcast,
  egghead,
  talk,
  allArticlesOnThisWebsite,
  strapi,
  videos,
  deeecode,
  stream,
  params,
}: Props) {
  const allContents = [
    logrocket,
    stw,
    youtube,
    codesource,
    podcast,
    egghead,
    vonage,
    kirupa,
    edpresso,
    soshace,
    talk,
    strapi,
    devto,
    stream,
    deeecode,
    videos,
    fcc,
  ]

  const [contents, setContents] = useState(allContents)
  const [articles, setArticles] = useState(allArticlesOnThisWebsite.edges)
  const [activeQuery, setActiveQuery] = useState("")
  const [activeTag, setActiveTag] = useState("all")
  const [activeType, setActiveType] = useState<typeof contentTypes[number]>(
    "all"
  )

  const updateParamsUrl = ({
    tag = activeTag,
    type = activeType,
    query = activeQuery,
  }: {
    tag?: string
    query?: string
    type?: string
  }) => {
    changeWithoutReloading(
      null,
      "",
      "?tag=" +
        tag +
        "&type=" +
        type +
        (query.length > 0 ? "&query=" + query : "")
    )
  }

  const { tag = null, query = null, type = null } = queryString.parse(params)

  useEffect(() => {
    if (tag || query || type) {
      if (tag) setActiveTag(tag as string)
      if (query) setActiveQuery(query as string)
      if (type) setActiveType(type as string)

      onQuery(
        (query as string) || activeQuery,
        (tag as string) || activeTag,
        (type as string) || activeType
      )
    }
  }, [])

  const onQuery = (
    val: string,
    tag: string = activeTag,
    type: string = activeType
  ) => {
    if (val === activeQuery && tag === activeTag && type === activeType) return

    const valReg = new RegExp(val, "ig")
    const tagReg = new RegExp(tag, "ig")
    const contents: AllContentsGql[] = []

    const isActiveTagAll = tag === "all" || !commonTags.includes(tag)
    const isActiveTypeAll = type === "all" || !contentTypes.includes(type)

    const contentsByType = [
      (isActiveTypeAll || type === "post") && logrocket,
      (isActiveTypeAll || type === "post") && stw,
      (isActiveTypeAll || type === "video") && deeecode,
      (isActiveTypeAll || type === "video") && youtube,
      (isActiveTypeAll || type === "video") && videos,
      (isActiveTypeAll || type === "post") && codesource,
      (isActiveTypeAll || type === "podcast") && podcast,
      (isActiveTypeAll || type === "post") && egghead,
      (isActiveTypeAll || type === "post") && vonage,
      (isActiveTypeAll || type === "post") && kirupa,
      (isActiveTypeAll || type === "post") && edpresso,
      (isActiveTypeAll || type === "post") && soshace,
      (isActiveTypeAll || type === "talk") && talk,
      (isActiveTypeAll || type === "post") && fcc,
      (isActiveTypeAll || type === "post") && strapi,
      (isActiveTypeAll || type === "post") && devto,
      (isActiveTypeAll || type === "post") && stream,
    ].filter(Boolean) as AllContentsGql[]

    contentsByType.forEach((c, i) => {
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

    const articles =
      type !== "post" && type !== "all"
        ? []
        : allArticlesOnThisWebsite.edges.filter(({ node }) => {
            const {
              frontmatter: { title, tags },
            } = node
            const tagsStr = tags?.join("") as string

            return (
              (valReg.test(title) || valReg.test(tagsStr)) &&
              (isActiveTagAll
                ? true
                : tagReg.test(title) || tagReg.test(tagsStr))
            )
          })

    setArticles(articles)
  }

  let totalContentsLength = 0,
    filteredContentsLength = 0

  function updateContentsLength(
    content: AllContentsGql,
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
        <div className="container">
          <div className="heading-bg-wrapper">
            <h1>All my contents in one place ✨</h1>
            <span className="count">Total: {totalContentsLength}+</span>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <FeaturedContent /> */}
        <div className="search-input-container">
          <SearchInput
            {...{ contentTypes, activeType, activeTag, commonTags }}
            onClickTag={tag => {
              setActiveTag(tag)
              updateParamsUrl({ tag })
              onQuery(activeQuery, tag)
            }}
            onClickType={type => {
              setActiveType(type)
              updateParamsUrl({ type })
              onQuery(activeQuery, activeTag, type)
            }}
            onQuery={val => {
              setActiveQuery(val)
              updateParamsUrl({ query: val })
              onQuery(val)
            }}
            defaultValue={activeQuery}
          />
        </div>
        <span
          className={classNames("filtered-count", {
            hidden:
              activeTag === "all" &&
              activeQuery.length < 1 &&
              activeType === "all",
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
        <div className="starter-section">
          If you'll love to have a contents page similar to this, check out this{" "}
          <NewTabLink
            className="starter-link"
            link={constants.GATSBY_STARTER_ALL_CONTENTS}
          >
            Gatsby Starter All Contents
          </NewTabLink>{" "}
          template I built.
        </div>
      </div>
    </Main>
  )
}
