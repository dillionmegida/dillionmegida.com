import styled from "styled-components"
import React from "react"
import constants from "../../constants"
import { Link } from "gatsby"
import { NewTabLink } from "../../components/Link"
import { AllContentsQql } from "../../interfaces/Contents"
import { AllPostsGql } from "../../interfaces/Post"
import Post from "../../components/Blog/PostMini"
import ArticlesSection from "./ArticlesSection"
import YoutubeSection from "./YoutubeSection"
import Newsletter from "../../components/Newsletter"

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
    grid-template-columns: auto 1fr;
    grid-gap: 30px;

    & > * {
      position: relative;
      top: 110px;
    }
  }
`

const ProfilePicture = styled.div`
  max-width: 400px;
  border: 10px solid var(--mainColor1);
  left: -10px;

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
    color: #bcc6d3;
    font-size: 40px;
    font-weight: 800;
    margin: 0;
  }
  .short-bio {
    color: #bcc6d3;
    font-size: 20px;
    margin: 20px 0;
    font-weight: 500;
  }
  .some-text {
    color: #bcc6d3;
    margin-top: 10px;
    line-height: 1.5;

    a {
      text-decoration: underline;
      color: #bcc6d3;
    }
    .resume {
      font-size: 18px;
      a {
        color: var(--mainColor1);
      }
    }
  }
`

const BodySection = styled.div`
  section {
    margin-bottom: 80px;
    > h2 {
      font-size: 25px;
      position: relative;
      overflow: hidden;
      &::after {
        content: "";
        position: absolute;
        top: 17px;
        left: 100px;
        border-top: 1px solid var(--mainColor1);
        width: 100%;
      }
    }

    .grid {
      display: grid;
      --columns: 2;
      grid-template-columns: repeat(var(--columns), 1fr);
      grid-column-gap: 40px;
    }

    .view-all-link {
      color: var(--mainColor1);
      font-size: 20px;
      text-decoration: underline;
      display: block;
      margin-top: 20px;
    }
  }
`

type Props = {
  contents: {
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

export default function HomePage({ contents }: Props) {
  const { allArticlesOnMyWebite, youtube } = contents

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
              Software Engineer 👨🏽‍💻 and Content Creator ✨
            </span>
            <span className="some-text">
              As a Software Engineer, my major focus is on the Frontend. I love
              building accessible applications on the web. I also love learning
              and simplifying tech--coding, practices, tools--via technical
              articles, videos, and every means possible. I write mostly about
              web development topics and JavaScript on{" "}
              <Link to={pageLinks.BLOG}>my blog here</Link>
              {publications.map((p, i) =>
                i === pubsLength - 1 ? (
                  <>
                    {" "}
                    and <a href={p.link}>{p.label}</a>
                  </>
                ) : (
                  <>
                    , <a href={p.link}>{p.label}</a>
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
          <ArticlesSection articles={allArticlesOnMyWebite} />
          <YoutubeSection videos={youtube} />
          <Newsletter />
        </div>
      </BodySection>
    </Main>
  )
}
