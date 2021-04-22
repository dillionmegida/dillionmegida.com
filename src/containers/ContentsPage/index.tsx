import React from "react"
import { AllContentsQql } from "../../interfaces/Contents"
import styled from "styled-components"
import { AnchorLink, NewTabLink } from "../../components/Link"
import Masonry from "react-masonry-css"
import { AllPostsGql } from "../../interfaces/Post"
import { Link } from "gatsby"
import useMedia from "use-media"
import ContentBlock from "./ContentBlock"
import FeaturedContent from "./FeaturedContent"

const Main = styled.main`
  width: 100%;
  margin: 0 auto;

  .heading-bg {
    width: 100%;
    background-color: var(--lightBlue);

    &-wrapper {
      max-width: 1200px;
      padding: 20px;
      margin: 0 auto;
      display: flex;
      align-items: center;

      h1 {
        margin-right: 100px;
      }

      .count {
        font-size: 20px;
        letter-spacing: 1px;
        font-weight: bold;
      }
    }
  }

  .main-content {
    padding: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .contents-container {
    margin-top: 30px;
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

type Props = {
  youtube: AllContentsQql
  devto: AllContentsQql
  edpresso: AllContentsQql
  logrocket: AllContentsQql
  soshace: AllContentsQql
  vonage: AllContentsQql
  fcc: AllContentsQql
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
  allArticlesOnThisWebsite,
}: Props) {
  const { FEATURED_CONTENT_LINK } = process.env

  console.log({...process.env})

  const contents = [logrocket, youtube, devto, edpresso, soshace, vonage, fcc]

  let contentsLength = 0

  function updateContentsLength(content: AllContentsQql) {
    content.edges.forEach(({ node }) => (contentsLength += node.content.length))
  }

  contents.forEach(c => updateContentsLength(c))

  allArticlesOnThisWebsite.edges.forEach(() => (contentsLength += 1))

  const isWiderThan800 = useMedia({ minWidth: 1000 })

  const isWiderThan600 = useMedia({ minWidth: 600 })

  return (
    <Main>
      <div className="heading-bg">
        <div className="heading-bg-wrapper">
          <h1>All my contents in one place ✨</h1>
          <span className="count">Total: {contentsLength}+</span>
        </div>
      </div>
      <div className="main-content">
          <FeaturedContent />
        <div className="contents-container">
          <Masonry
            breakpointCols={isWiderThan800 ? 3 : isWiderThan600 ? 2 : 1}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {contents.map(c =>
              c.edges.map(({ node }) => {
                return (
                  <ContentBlock
                    key={node.platform}
                    heading={{ title: node.platform, link: node.link }}
                    items={node.content
                      .reverse()
                      .map(({ title, link }) => ({ title, link }))}
                  />
                )
              })
            )}
            <ContentBlock
              heading={{ title: "dillionmegida.com", link: "/" }}
              items={allArticlesOnThisWebsite.edges.map(
                ({
                  node: {
                    frontmatter: { title },
                    fields: { slug },
                  },
                }) => ({ title, link: slug })
              )}
            />
          </Masonry>
        </div>
      </div>
    </Main>
  )
}
