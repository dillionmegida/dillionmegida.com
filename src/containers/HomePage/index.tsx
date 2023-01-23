import styled from "styled-components"
import React from "react"
import constants from "../../constants"
import { Link } from "gatsby"
import { NewTabLink } from "../../components/Link"
import { AllContentGql } from "../../interfaces/Content"
import { AllPostsGql } from "../../interfaces/Post"
import ArticlesSection from "./ArticlesSection"
import YoutubeSection from "./YoutubeSection"
import STWBlock from "./STWBlock"
import JsCourseSection from "./JsCourseSection"

const { publications, pageLinks, social, RESUME } = constants
const pubsLength = publications.length

const Main = styled.main``

const BioSection = styled.div`
  width: 100%;
  background-color: var(--mainColor1);
  position: relative;
  top: -80px;
  padding-bottom: 50px;

  .container {
    display: grid;
    --columns: auto 1fr;
    grid-template-columns: var(--columns);
    grid-gap: 30px;

    @media (max-width: 650px) {
      --columns: 1fr;
    }

    & > * {
      position: relative;
      top: 110px;
    }

    .work-link {
      color: var(--mainColor2);
    }
  }
`

const ProfilePicture = styled.div`
  max-width: 400px;
  border: 10px solid var(--mainColor1);
  left: -10px;
  width: 100%;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 110%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.15);
    position: absolute;
    left: -50px;
    z-index: -1;
    top: -20px;
  }

  @media (max-width: 800px) {
    max-width: 250px;
  }

  @media (max-width: 650px) {
    max-width: 100%;
    order: 2;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`

const Text = styled.div`
  max-width: 600px;
  span {
    display: block;
  }
  .name {
    color: white;
    font-size: 40px;
    font-weight: 800;
    margin: 0;
  }
  .short-bio {
    color: white;
    margin: 20px 0;
    font-size: 22px;
    font-weight: 500;
  }
  .some-text {
    font-size: 20px;
    color: white;
    margin-top: 10px;
    line-height: 2;

    .video-link {
      display: inline-block;
      &.a-link::after {
        bottom: 5px;
      }
    }

    .resume {
      a {
        font-weight: 500;

        @media (max-width: 650px) {
          color: white;
          font-size: 20px;
        }
      }
    }
  }
`

const BodySection = styled.div`
  section {
    margin-bottom: 80px;
    > h2 {
      font-size: 30px;
      position: relative;
      overflow: hidden;
      color: var(--mainColor2);
      &.underline::after {
        content: "";
        position: absolute;
        top: 25px;
        left: 150px;
        border-top: 1px solid var(--mainColor2);
        width: 100%;
      }
    }

    .grid {
      display: grid;
      --columns: 2;
      grid-template-columns: repeat(var(--columns), 1fr);
      grid-column-gap: 60px;

      @media (max-width: 650px) {
        --columns: 1;
      }
    }

    .view-all-link {
      color: var(--mainColor2);
      font-size: 20px;
      display: block;
      margin-top: 20px;
      font-weight: 500;
      position: relative;
      width: max-content;
    }
  }
`

type Props = {
  content: {
    youtube: AllContentGql
    deeecode: AllContentGql
    allArticlesOnMyWebite: AllPostsGql
  }
}

export default function HomePage({ content }: Props) {
  const { allArticlesOnMyWebite, youtube, deeecode } = content

  const { CURRENT_WORK_LINK, CURRENT_WORK_NAME } = constants

  return (
    <Main>
      <JsCourseSection />
      <BioSection>
        <div className="container">
          <ProfilePicture>
            <img src={constants.MY_PICTURE} alt="Profile picture" />
          </ProfilePicture>
          <Text>
            <h1 className="name">Dillion Megida</h1>
            <span className="short-bio">
              Developer 🥑{" "}
              {CURRENT_WORK_NAME && CURRENT_WORK_LINK ? (
                <>
                  {" "}
                  at{" "}
                  <NewTabLink
                    className="work-link a-link"
                    link={CURRENT_WORK_LINK}
                  >
                    {CURRENT_WORK_NAME}
                  </NewTabLink>
                </>
              ) : null}{" "}
              and Content Creator ✨
            </span>
            <span className="some-text">
              I'm a Content Creator passionate about simplifying topics around
              tech/web/programming via videos and articles. I also love sharing
              my experiences with life and career as I believe they can help
              someone out there.
              <br />
              <br />
              As a Software Engineer familiar with backend technologies, I focus
              majorly on the frontend side of applications, with professional
              experience in React (and its frameworks) and basic experience with
              Angular and Vue. I also love building accessible applications, and
              playing with CSS.
              <br />
              <br />I write mostly on{" "}
              <Link to={pageLinks.BLOG} className="a-link">
                my blog here
              </Link>
              {publications.map((p, i) =>
                i === pubsLength - 1 ? (
                  <React.Fragment key={`publication-${i}`}>
                    {" "}
                    and{" "}
                    <a className="a-link" key={`link${i}`} href={p.link}>
                      {p.label}
                    </a>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={`publication-${i}`}>
                    ,{" "}
                    <a className="a-link" key={`link${i}`} href={p.link}>
                      {p.label}
                    </a>
                  </React.Fragment>
                )
              )}{" "}
              <br />
              <br />I also create Career/Life video content on{" "}
              <NewTabLink
                className="video-link a-link"
                link={social.YouTube.link}
              >
                my YouTube Channel
              </NewTabLink>{" "}
              and Tech video content on{" "}
              <NewTabLink
                className="video-link a-link"
                link={social.DeeeCode.link}
              >
                my DeeeCode Channel
              </NewTabLink>
              <br />
              <br />
              {/* Co-founder,{" "}
              <NewTabLink link="http://skulmart.com/">SkulMart</NewTabLink> */}
              <br />
              <br />
              <span className="resume">
                <NewTabLink className="a-link" link={RESUME}>
                  Resume
                </NewTabLink>
              </span>
            </span>
          </Text>
        </div>
      </BioSection>
      <BodySection className="body">
        <div className="container">
          <STWBlock />
          <ArticlesSection articles={allArticlesOnMyWebite} />
          <YoutubeSection deeecode={deeecode} youtube={youtube} />
          {/* <Newsletter /> */}
        </div>
      </BodySection>
    </Main>
  )
}
