import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Helmet from "../../components/Helmet"
import Layout from "../../components/Layout"

const Main = styled.main`
  &.container {
    padding-top: 40px;
  }

  h1 {
    color: var(--text-color);
    margin-bottom: 30px;
    font-size: clamp(1.4rem, 6vw, 2.5rem);
    line-height: 1.2em;
  }

  .talks-container {
    display: grid;
    --columns: 3;
    grid-template-columns: repeat(var(--columns), 1fr);
    column-gap: 20px;
    row-gap: 40px;

    @media (max-width: 800px) {
      --columns: 2;
    }

    @media (max-width: 500px) {
      --columns: 1;
    }

    .talk {
      width: 100%;
      position: relative;
      &__cover {
        overflow: hidden;
        width: 100%;
        aspect-ratio: 2/1.2;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &:hover {
        .talk__cover img {
          transform: scale(1.2);
        }
      }

      &.a-link {
        --color: var(--mainColor3);
        &::after {
          bottom: -15px;
        }
      }
    }
  }
`

type Props = {
  data: {
    slides: {
      edges: {
        node: { title: string; url: string; path: string; cover: string }
      }[]
    }
  }
}

export default function Talks({ data }: Props) {
  return (
    <Layout>
      <Helmet
        pageTitle="Slides from my Talks"
        pageDesc="Here are the slides of some of the talks I've given"
        pageLink="/talks"
        imageCard="/img/talks-cover.png"
      />
      <Main className="container">
        <h1>SLIDES FROM MY TALKS</h1>
        <div className="talks-container">
          {data.slides.edges.map(({ node }) => (
            <Link to={node.path} className="talk a-link">
              <div className="talk__cover">
                <img src={`/talk-covers/${node.cover}`} />
              </div>
            </Link>
          ))}
        </div>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query {
    slides: allSlidesYaml {
      edges {
        node {
          title
          url
          path
          cover
        }
      }
    }
  }
`
