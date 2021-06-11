import React from "react"
import ContentsPage from "../../containers/ContentsPage"
import Helmet from "../../components/Helmet"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { AllContentsQql } from "../../interfaces/Contents"
import { AllPostsGql } from "../../interfaces/Post"

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
  location: Location
}

function Contents({ data, location }: Props) {
  return (
    <Layout>
      <Helmet
        pageTitle="All my contents in one place ✨"
        pageDesc="This is a page for every content I've created ranging from articles to videos to podcasts to everything on web development and tech."
        pageLink="/contents"
      />
      <ContentsPage
        params={location.search}
        youtube={data.youtube}
        devto={data.devto}
        edpresso={data.edpresso}
        logrocket={data.logrocket}
        soshace={data.soshace}
        vonage={data.vonage}
        fcc={data.fcc}
        podcast={data.podcast}
        talk={data.talk}
        kirupa={data.kirupa}
        allArticlesOnThisWebsite={data.allArticlesOnMyWebite}
      />
    </Layout>
  )
}

export const query = graphql`
  query ContentsPageQuery {
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
