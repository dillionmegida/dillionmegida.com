import { graphql } from "gatsby"
import React from "react"
import Helmet from "../components/Helmet"
import Layout from "../components/Layout"
import styled from "styled-components"

const Main = styled.main`
  color: #e2e0e0;

  .container {
    max-width: 800px;
    padding-top: 40px;
  }

  font-size: clamp(1rem, 7vw, 1.3rem);

  h1 {
    font-size: clamp(2rem, 7vw, 3rem);
    line-height: 120%;
    margin-bottom: 20px;
  }

  h2 {
    margin: 30px 0 10px;
  }

  hr {
    margin: 50px 0 20px;
    border-color: color-mix(in srgb, white, transparent 90%);
  }

  .tag {
    font-size: calc(100% - 5px);
    font-style: italic;
  }
  .description {
    font-size: calc(100% - 3px);
  }

  .content {
    padding: 30px 0;

    p {
      margin-bottom: 30px;
    }
  }


  a {
    transition: background 300ms;
    color: yellow;
    padding: 0 6px;
    line-height: 120%;
    background: var(--midMainColor1);
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    position: relative;
    font-size: calc(100% - 2px);

    &:hover {
      background: linear-gradient(
        var(--secondary-color),
        var(--tertiary-color)
      );
      color: black;
    }
  }
`

type Props = any

export default function Now({ data }: Props) {
  const {
    frontmatter: { title, tag, description, cover },
    html,
  } = data.markdownRemark
  return (
    <Layout>
      <Helmet
        pageTitle="What is Dillion doing now?"
        pageLink="/now"
        pageDesc={description}
        imageCard={cover}
      />
      <Main>
        <div className="container">
          <h1>{title}</h1>
          <p className="description">{description}</p>
          <span className="tag" dangerouslySetInnerHTML={{ __html: tag }} />
          <hr />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query NowQuery {
    markdownRemark(fields: { slug: { eq: "/now/" } }) {
      fields {
        slug
      }
      frontmatter {
        title
        tag
        description
        cover
      }
      html
    }
  }
`
