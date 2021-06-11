import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import HomePage from "../containers/HomePage"
import { AllContentsQql } from "../interfaces/Contents"
import { AllPostsGql } from "../interfaces/Post"

type Props = {
  data: {
    youtube: AllContentsQql
    devto: AllContentsQql
    edpresso: AllContentsQql
    logrocket: AllContentsQql
    soshace: AllContentsQql
    vonage: AllContentsQql
    fcc: AllContentsQql
    podcast: AllContentsQql
    talk: AllContentsQql
    kirupa: AllContentsQql
    allArticlesOnMyWebite: AllPostsGql
  }
}

export default function Home({ data }: Props) {
  return (
    <Layout>
      <HomePage contents={data} />
    </Layout>
  )
}

export const query = graphql`
  query ContentsQuery {
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

    vonage: allVonageYaml {
      edges {
        node {
          id
          platform
          link
          content {
            title
            link
            tags
          }
        }
      }
    }

    thisdot: allThisdotYaml {
      edges {
        node {
          id
          platform
          link
          content {
            title
            link
            tags
          }
        }
      }
    }

    soshace: allSoshaceYaml {
      edges {
        node {
          id
          platform
          link
          content {
            title
            link
            tags
          }
        }
      }
    }

    logrocket: allLogrocketYaml {
      edges {
        node {
          id
          platform
          link
          content {
            title
            link
            tags
          }
        }
      }
    }

    fcc: allFccYaml {
      edges {
        node {
          id
          platform
          link
          content {
            title
            link
            tags
          }
        }
      }
    }

    edpresso: allEdpressoYaml {
      edges {
        node {
          id
          platform
          link
          content {
            title
            link
            tags
          }
        }
      }
    }

    devto: allDevtoYaml {
      edges {
        node {
          id
          platform
          link
          content {
            title
            link
            tags
          }
        }
      }
    }

    podcast: allPodcastYaml {
      edges {
        node {
          id
          platform
          content {
            title
            link
            tags
          }
        }
      }
    }

    talk: allTalkYaml {
      edges {
        node {
          id
          platform
          content {
            title
            link
            tags
          }
        }
      }
    }

    kirupa: allKirupaYaml {
      edges {
        node {
          id
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
      limit: 4
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
