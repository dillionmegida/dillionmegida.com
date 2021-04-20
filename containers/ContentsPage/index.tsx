import React from "react"
import { AllContentsQql } from "../../src/interfaces/Contents"
import styled from "styled-components"
import { NewTabLink } from "../../src/components/Link"

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
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .contents-container {
    display: grid;
    margin: 20px auto;
    --columns: 3;
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-gap: 20px;

    @media (max-width: 800px) {
        --columns: 2;
    }

    @media (max-width: 650px) {
        --columns: 1;
    }

    .content-block {
      h2 {
        margin: 0 0 10px;
      }
      &__items {
      }
      &__item {
        a {
          color: var(--mainColor);
          text-decoration: underline;
          margin-bottom: 7px;
          display: block;
        }
      }
    }
  }

  .note {
    text-align: center;
    margin-top: 50px;
  }
`

type Props = {
  videos: AllContentsQql
  articles: AllContentsQql
}

export default function ContentsPage({ videos, articles }: Props) {
  let contentsLength = 0

  videos.edges.forEach(({ node }) => (contentsLength += node.content.length))

  articles.edges.forEach(({ node }) => (contentsLength += node.content.length))

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
          {videos.edges.concat(articles.edges).map(({ node }) => {
            return (
              <div className="content-block">
                <h2>{node.platform}</h2>
                <div className="content-block__items">
                  {node.content.reverse().map(({ title, link }) => (
                    <div className="content-block__item">
                      <NewTabLink link={link}>{title}</NewTabLink>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <div className="note">This page is a Work in Progress...</div>
      </div>
    </Main>
  )
}
