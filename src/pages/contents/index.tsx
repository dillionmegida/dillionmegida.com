import React from "react"
import ContentsPage from "../../../containers/ContentsPage"
import Helmet from "../../components/Helmet"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { AllContentsQql } from "../../interfaces/Contents"
import { AllPostsGql, GqlPost } from "../../interfaces/Post"

type Props = {
  data: {
    allVideos: AllContentsQql
    allArticles: AllContentsQql
    allArticlesOnMyWebite: AllPostsGql
  }
}

function Contents({ data }: Props) {
  return (
    <Layout>
      <Helmet
        pageTitle="All my contents in one place 😎"
        pageDesc="This is a page for every content I've created and will create in the future."
        pageLink="/contents"
      />
      <ContentsPage
        videos={data.allVideos}
        articles={data.allArticles}
        allArticlesOnThisWebsite={data.allArticlesOnMyWebite}
      />
    </Layout>
  )
}

export const query = graphql`
  query ContentsPageQuery {
    allVideos: allVideosYaml {
      edges {
        node {
          id
          link
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
          link
          content {
            title
            link
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

export default Contents
