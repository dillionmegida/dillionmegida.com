import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { NewTabLink } from "../components/Link"
import constants from "../constants"

const BioSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 30px;
  width: 100%;
  background-color: var(--mainColor1);
  padding: 20px 50px;
  position: relative;
  top: -80px;

  & > * {
    position: relative;
    top: 100px;
  }
`

const ProfilePicture = styled.div`
  max-width: 400px;
  border: 10px solid var(--mainColor1);

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
  }
  .short-bio {
    color: #bcc6d3;
    font-size: 20px;
    margin-top: 5px;
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

const { publications, pageLinks, social, RESUME } = constants

export default function Home() {
  const pubsLength = publications.length

  return (
    <Layout>
      <main>
        <BioSection>
          <ProfilePicture>
            <img src={constants.MY_PICTURE} alt="Profile picture" />
          </ProfilePicture>
          <Text>
            <span className="name">Dillion Megida</span>
            <span className="short-bio">
              Software Engineer 👨🏽‍💻 and Content Creator ✨ based in Nigeria.
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
        </BioSection>
        <h1>Hello</h1>
      </main>
    </Layout>
  )
}
