import React from "react"
import { AllContentsQql } from "../../src/interfaces/Contents"
import styled from "styled-components"
import { AnchorLink, NewTabLink } from "../../src/components/Link"
import Masonry from "react-masonry-css"
import { AllPostsGql } from "../../src/interfaces/Post"
import { Link } from "gatsby"
import useMedia from "use-media"

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

    .my-masonry-grid_column .content-block {
      margin-bottom: 50px;
    }

    .content-block {
      h2 {
        margin: 0 0 10px;
        a {
          text-decoration: underline;
          color: var(--midMainColor1);
        }
      }
      &__items {
      }
      &__item {
        a {
          color: var(--mainColor);
          text-decoration: underline;
          margin-bottom: 10px;
          display: block;
        }
      }
    }
  }
`

type Props = {
  videos: AllContentsQql
  articles: AllContentsQql
  allArticlesOnThisWebsite: AllPostsGql
}

export default function ContentsPage({
  videos,
  articles,
  allArticlesOnThisWebsite,
}: Props) {
  let contentsLength = 0

  videos.edges.forEach(({ node }) => (contentsLength += node.content.length))

  articles.edges.forEach(({ node }) => (contentsLength += node.content.length))

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
        <div className="contents-container">
          <Masonry
            breakpointCols={isWiderThan800 ? 3 : isWiderThan600 ? 2 : 1}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {articles.edges.concat(videos.edges).map(({ node }) => {
              return (
                <div key={node.platform} className="content-block">
                  <h2>
                    <NewTabLink link={node.link}>{node.platform}</NewTabLink>
                  </h2>
                  <div className="content-block__items">
                    {node.content.reverse().map(({ title, link }) => (
                      <div key={title} className="content-block__item">
                        <NewTabLink link={link}>{title}</NewTabLink>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
            <div className="content-block">
              <h2>
                <Link to="/">dillionmegida.com</Link>
              </h2>
              <div className="content-block__items">
                {allArticlesOnThisWebsite.edges.map(
                  ({
                    node: {
                      frontmatter: { title },
                      fields: { slug },
                    },
                  }) => {
                    return (
                      <div className="content-block__item">
                        <AnchorLink link={slug}>{title}</AnchorLink>
                      </div>
                    )
                  }
                )}
              </div>
            </div>
          </Masonry>
        </div>
      </div>
    </Main>
  )
}
