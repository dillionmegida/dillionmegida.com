import styled from "styled-components"
import React from "react"
import constants from "../../constants"
import { Link } from "gatsby"
import { NewTabLink } from "../../components/Link"
import { AllContentsQql } from "../../interfaces/Contents"
import { AllPostsGql } from "../../interfaces/Post"
import ArticlesSection from "./ArticlesSection"
import YoutubeSection from "./YoutubeSection"
import Newsletter from "../../components/Newsletter"
import STWBlock from "./STWBlock"

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
      text-decoration: underline;
    }
  }
`

const ProfilePicture = styled.div`
  max-width: 400px;
  border: 10px solid var(--mainColor1);
  left: -10px;
  width: 100%;

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
    font-size: 20px;
    margin: 20px 0;
    font-weight: 500;
  }
  .some-text {
    color: white;
    margin-top: 10px;
    line-height: 2;

    a {
      text-decoration: underline;
      color: #bcc6d3;
    }
    .resume {
      font-size: 18px;
      a {
        color: var(--mainColor1);
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
      &.underline::after {
        content: "";
        position: absolute;
        top: 25px;
        left: 130px;
        border-top: 1px solid var(--mainColor1);
        width: 100%;
      }
    }

    .grid {
      display: grid;
      --columns: 2;
      grid-template-columns: repeat(var(--columns), 1fr);
      grid-column-gap: 40px;

      @media (max-width: 650px) {
        --columns: 1;
      }
    }

    .view-all-link {
      color: var(--mainColor1);
      font-size: 20px;
      text-decoration: underline;
      display: block;
      margin-top: 20px;
      font-weight: 500;
    }
  }
`

type Props = {
  contents: {
    youtube: AllContentsQql
    allArticlesOnMyWebite: AllPostsGql
  }
}

export default function HomePage({ contents }: Props) {
  const { allArticlesOnMyWebite, youtube } = contents

  const { CURRENT_WORK_LINK, CURRENT_WORK_NAME } = constants

  return (
    <Main>
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
                  <NewTabLink className="work-link" link={CURRENT_WORK_LINK}>
                    {CURRENT_WORK_NAME}
                  </NewTabLink>
                </>
              ) : null}{" "}
              and Content Creator ✨
            </span>
            <span className="some-text">
              As a Software Engineer, I focus majorly on the frontend of
              applications. I love building accessible applications on the web.
              I also love learning and simplifying tech--coding, practices,
              tools--via technical articles, videos, and every means possible. I
              write mostly about web development topics and JavaScript on{" "}
              <Link to={pageLinks.BLOG}>my blog here</Link>
              {publications.map((p, i) =>
                i === pubsLength - 1 ? (
                  <>
                    {" "}
                    and{" "}
                    <a key={`link${i}`} href={p.link}>
                      {p.label}
                    </a>
                  </>
                ) : (
                  <>
                    ,{" "}
                    <a key={`link${i}`} href={p.link}>
                      {p.label}
                    </a>
                  </>
                )
              )}{" "}
              <br />
              <br />I also create Tech video content on{" "}
              <NewTabLink link={social.YouTube.link}>
                my YouTube Channel
              </NewTabLink>
              <br />
              <br />
              Co-founder,{" "}
              <NewTabLink link="http://skulmart.com/">SkulMart</NewTabLink>
              <br />
              <br />
              <span className="resume">
                <NewTabLink link={RESUME}>Resume</NewTabLink>
              </span>
            </span>
          </Text>
        </div>
      </BioSection>
      <BodySection className="body">
        <div className="container">
          <STWBlock />
          <ArticlesSection articles={allArticlesOnMyWebite} />
          <YoutubeSection videos={youtube} />
          <Newsletter />
        </div>
      </BodySection>
    </Main>
  )
}
