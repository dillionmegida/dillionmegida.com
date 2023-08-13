import { graphql } from "gatsby"
import React from "react"
import Helmet from "../components/Helmet"
import Layout from "../components/Layout"
import constants from "../constants"
import HomePage from "../containers/HomePage"
import { AllContentGql } from "../interfaces/Content"
import { AllPostsGql } from "../interfaces/Post"
import styled from "styled-components"

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`

type Props = {
  data: {
    youtube: AllContentGql
    deeecode: AllContentGql
    allArticlesOnMyWebite: AllPostsGql
  }
}

const { meta } = constants

export default function Home({ data }: Props) {
  return (
    <Container>
      <Helmet pageTitle={meta.TITLE} pageLink="/" pageDesc={meta.DESC} />
      <HomePage />
    </Container>
  )
  //   return (
  //     <Layout>
  //       <Helmet pageTitle={meta.TITLE} pageLink="/" pageDesc={meta.DESC} />
  //       <HomePage content={data} />
  //     </Layout>
  //   )
}

export const query = graphql`
  query ContentQuery {
    youtube: allYoutubeYaml {
      edges {
        node {
          id
          link
          platform
          content {
            title
            link
            tags
          }
        }
      }
    }

    deeecode: allDeeecodeYaml {
      edges {
        node {
          id
          link
          platform
          content {
            title
            link
            tags
          }
        }
      }
    }

    allArticlesOnMyWebite: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^(/p/)/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          timeToRead
          frontmatter {
            tags
            title
            date
            pageDescription
          }
        }
      }
    }
  }
`
