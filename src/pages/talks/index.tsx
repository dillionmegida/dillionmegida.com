import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Helmet from "../../components/Helmet"
import Layout from "../../components/Layout"

const Main = styled.main`
  h1 {
    color: white;
  }
`

type Props = {
  data: {
    slides: {
      edges: {
        node: { title: string; url: string; path: string }
      }[]
    }
  }
}

export default function Talks({ data }: Props) {
  return (
    <Layout>
      <Helmet pageTitle="My Talks" pageDesc="My Talks" pageLink="/talks" />
      <Main className="container">
        <h1>TALKS PAGE IN PROGRESS...</h1>
        {/* <ul>
          {data.slides.edges.map(({ node }) => (
            <li>
              <Link to={node.path}>{node.title}</Link>
            </li>
          ))}
        </ul> */}
      </Main>
      {/* <Helmet pageTitle={meta.TITLE} pageLink="/" pageDesc={meta.DESC} />
        <HomePage content={data} /> */}
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
        }
      }
    }
  }
`
