import React from "react"
import ContentsPage from "../../../containers/ContentsPage"
import Helmet from "../../components/Helmet"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { AllContentsQql } from "../../interfaces/Contents"

type Props = {
  data: { allContents: AllContentsQql }
}

function Contents({ data }: Props) {
  return (
    <Layout>
      <Helmet
        pageTitle="All my contents in one place 😎"
        pageDesc="This is a page for every content I've created and will create in the future."
        pageLink="/contents"
      />
      <ContentsPage contents={data.allContents} />
    </Layout>
  )
}

export const query = graphql`
  query ContentsPageQuery {
    allContents: allContentsYaml {
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
