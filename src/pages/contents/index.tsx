import React from "react"
import ContentsPage from "../../../containers/ContentsPage"
import Helmet from "../../components/Helmet"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { AllContentsQql } from "../../interfaces/Contents"

type Props = {
  data: { allVideos: AllContentsQql; allArticles: AllContentsQql }
}

function Contents({ data }: Props) {
  return (
    <Layout>
      <Helmet
        pageTitle="All my contents in one place 😎"
        pageDesc="This is a page for every content I've created and will create in the future."
        pageLink="/contents"
      />
      <ContentsPage videos={data.allVideos} articles={data.allArticles} />
    </Layout>
  )
}

export const query = graphql`
  query ContentsPageQuery {
    allVideos: allVideosYaml {
      edges {
        node {
          id
          platform
          content {
            title
            link
          }
        }
      }
    }
    allArticles: allArticlesYaml {
      edges {
        node {
          id
          platform
          content {
            title
            link
          }
        }
      }
    }
  }
`

export default Contents
