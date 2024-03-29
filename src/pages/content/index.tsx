import React, { useEffect } from "react"
import ContentPage from "../../containers/ContentPage"
import Helmet from "../../components/Helmet"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { AllContentGql } from "../../interfaces/Content"
import { AllPostsGql } from "../../interfaces/Post"
import constants from "../../constants"
import { AllTalksGql } from "../../interfaces/Talk"

type Props = {
  data: {
    youtube: AllContentGql
    tiktok: AllContentGql
    videos: AllContentGql
    deeecode: AllContentGql
    codesource: AllContentGql
    devto: AllContentGql
    edpresso: AllContentGql
    logrocket: AllContentGql
    stw: AllContentGql
    soshace: AllContentGql
    vonage: AllContentGql
    fcc: AllContentGql
    podcast: AllContentGql
    memberstack: AllContentGql
    polywork: AllContentGql
    kirupa: AllContentGql
    egghead: AllContentGql
    strapi: AllContentGql
    stream: AllContentGql
    talks: AllTalksGql
    allArticlesOnMyWebite: AllPostsGql
  }
  location: Location
}

function Content({ data, location }: Props) {
  return (
    <Layout>
      <Helmet
        pageTitle="All my content in one place ✨"
        pageDesc="This is a page for every content I've created ranging from articles to videos to podcasts to everything on web development and tech."
        pageLink={constants.pageLinks.CONTENT}
        imageCard="/img/contents-cover.png"
      />
      <ContentPage
        params={location.search}
        youtube={data.youtube}
        tiktok={data.tiktok}
        videos={data.videos}
        deeecode={data.deeecode}
        codesource={data.codesource}
        devto={data.devto}
        edpresso={data.edpresso}
        memberstack={data.memberstack}
        logrocket={data.logrocket}
        stw={data.stw}
        soshace={data.soshace}
        vonage={data.vonage}
        fcc={data.fcc}
        podcast={data.podcast}
        kirupa={data.kirupa}
        polywork={data.polywork}
        egghead={data.egghead}
        strapi={data.strapi}
        stream={data.stream}
        talks={data.talks}
        allArticlesOnThisWebsite={data.allArticlesOnMyWebite}
      />
    </Layout>
  )
}

export const query = graphql`
  query ContentPageQuery {
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

    tiktok: allTiktokYaml {
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

    deeecode: allDeeecodeYaml {
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

    memberstack: allMemberstackYaml {
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

    polywork: allPolyworkYaml {
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

    talks: allSlidesYaml {
      edges {
        node {
          id
          title
          url
          path
          tags
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

export default Content
