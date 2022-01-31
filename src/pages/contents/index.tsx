import React from "react"
import ContentsPage from "../../containers/ContentsPage"
import Helmet from "../../components/Helmet"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { AllContentsGql } from "../../interfaces/Contents"
import { AllPostsGql } from "../../interfaces/Post"

type Props = {
  data: {
    youtube: AllContentsGql
    videos: AllContentsGql
    codesource: AllContentsGql
    devto: AllContentsGql
    edpresso: AllContentsGql
    logrocket: AllContentsGql
    stw: AllContentsGql
    soshace: AllContentsGql
    vonage: AllContentsGql
    fcc: AllContentsGql
    podcast: AllContentsGql
    talk: AllContentsGql
    kirupa: AllContentsGql
    egghead: AllContentsGql
    strapi: AllContentsGql
    stream: AllContentsGql
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
        videos={data.videos}
        codesource={data.codesource}
        devto={data.devto}
        edpresso={data.edpresso}
        logrocket={data.logrocket}
        stw={data.stw}
        soshace={data.soshace}
        vonage={data.vonage}
        fcc={data.fcc}
        podcast={data.podcast}
        talk={data.talk}
        kirupa={data.kirupa}
        egghead={data.egghead}
        strapi={data.strapi}
        stream={data.stream}
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

    videos: allVideosYaml {
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

    egghead: allEggheadYaml {
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

    stream: allStreamYaml {
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

    stw: allStwYaml {
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

    codesource: allCodesourceYaml {
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

    strapi: allStrapiYaml {
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
