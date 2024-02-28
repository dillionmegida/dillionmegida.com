import React from "react"
import styled from "styled-components"
import { NewTabLink } from "../../components/AnchorLink"
import constants from "../../constants"
import YouTube from "../../components/Icon/YouTube"
import LinkIcon from "../../components/Icon/Link"
import TikTok from "../../components/Icon/TikTok"
import Twitter from "../../components/Icon/Twitter"
import LinkedIn from "../../components/Icon/LinkedIn"
import { Link } from "gatsby"

const Main = styled.main`
  padding: calc(100vh / 10) 10px 150px;
  color: var(--text-color);
  position: relative;
  width: 100%;
  isolation: isolate;
  font-size: clamp(1rem, 6vw, 1.3rem);
  min-height: 100vh;
  overflow: hidden;
  margin: 0;
  background-color: var(--bgColor);

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0;
  }

  &::after {
    content: "";
    position: absolute;
    filter: grayscale(100%) opacity(0.1);
    scale: 1.4;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #e5e5f7;
    opacity: 0.8;
    background: radial-gradient(
        circle,
        transparent 20%,
        #e5e5f7 20%,
        #e5e5f7 80%,
        transparent 80%,
        transparent
      ),
      radial-gradient(
          circle,
          transparent 20%,
          #e5e5f7 20%,
          #e5e5f7 80%,
          transparent 80%,
          transparent
        )
        25px 25px,
      linear-gradient(#444cf7 2px, transparent 2px) 0 -1px,
      linear-gradient(90deg, #444cf7 2px, #e5e5f7 2px) -1px 0;
    background-size: 50px 50px, 50px 50px, 25px 25px, 25px 25px;
  }

  .landing {
    padding: 0 20px 100px;
    background: linear-gradient(
      var(--mainColor1),
      var(--mainColor1),
      transparent
    );
    height: max-content;

    .top-heading {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 40px;
      padding: 20px 0;
    }

    .body {
      display: flex;
      gap: 60px;
      max-width: 800px;

      @media (max-width: 800px) {
        flex-wrap: wrap;
      }
    }

    .image {
      width: 150px;
      height: 200px;
      position: relative;
      margin-top: -50px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        border: 2px solid var(--mainColor1);
      }

      .main {
        filter: grayscale(100%);
        position: relative;
        transition: filter 300ms;

        &:hover {
          filter: none;
        }
      }

      .second {
        scale: 1.1;
        position: absolute;
        top: 20px;
        opacity: 0.1;
        filter: grayscale(100%);
        left: -14px;
      }
    }
  }

  .link-highlight {
    transition: background 300ms;
    color: yellow;
    padding: 0 6px;
    margin: 0 3px;
    height: 30px;
    background: var(--midMainColor1);
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    position: relative;
    top: 3px;

    &:hover {
      background: linear-gradient(
        var(--secondary-color),
        var(--tertiary-color)
      );
      color: black;
    }
  }

  .text {
    width: 100%;

    .name {
      font-size: clamp(2rem, 6vw, 2.5rem);
      background: linear-gradient(#f0de14, #65fcb0);
      font-weight: 800;
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
    }

    .title {
      font-size: clamp(1.3rem, 6vw, 1.5rem);
      position: relative;
      margin-bottom: 50px;
      font-weight: 500;
      line-height: 1.2em;

      &::after {
        width: 80px;
        content: "";
        position: absolute;
        left: 0;
        bottom: -20px;
        height: 2px;
        background: linear-gradient(#f0de14, #65fcb0);
      }
    }

    .highlight {
      background: linear-gradient(#f0de14, #65fcb0);
      font-weight: 800;
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
    }

    .bio {
      /* max-width: 500px; */

      p {
        margin-bottom: 30px;
        line-height: 30px;
      }
    }

    .more-links {
      position: relative;
      margin-top: 70px;
      max-width: 600px;

      &::before {
        width: 80px;
        content: "";
        position: absolute;
        top: -10px;
        left: 0;
        height: 2px;
        background: linear-gradient(#f0de14, #65fcb0);
      }
    }
  }
`

type Props = {
  content: any
}

export default function HomePage({ content }: Props) {
  const { allArticlesOnMyWebite, youtube, deeecode } = content

  return (
    <Main>
      <div className="landing container">
        <div className="body">
          <div className="image">
            <img
              className="second"
              src={constants.MY_PICTURE}
              alt="Dillion Megida"
            />
            <img
              className="main"
              src={constants.MY_PICTURE}
              alt="Dillion Megida"
            />
          </div>
          <div className="text">
            <div className="top-heading">
              <Link className="link-highlight" to="/blog">
                <LinkIcon color="#fff" /> /blog
              </Link>
              <Link className="link-highlight" to="/content">
                <LinkIcon color="#fff" /> /content
              </Link>
              <Link className="link-highlight" to="/talks">
                <LinkIcon color="#fff" /> /talks
              </Link>
              <Link className="link-highlight" to="/now">
                <LinkIcon color="#fff" /> /now
              </Link>
            </div>
            <h1 className="name">Dillion Megida</h1>
            <p className="title">
              Software Engineer,{" "}
              <span className="highlight ">Developer Educator</span>,
              <br />
              <span>Developer Advocate</span>
            </p>
            <div className="bio">
              <p>
                I love to <span className="highlight">TEACH</span> and{" "}
                <span className="highlight">SIMPLIFY</span> technical concepts.
                I get a lot of fulfillment when people understand something
                through me. I love to{" "}
                <span className="highlight">create videos & articles</span>. I
                also love to <span className="highlight">SHARE</span> my
                knowledge and experiences on different topics 😇
              </p>
              <p>
                I simplify Web Development on{" "}
                <NewTabLink
                  className="link-highlight"
                  link={constants.deeecode.yt}
                >
                  <YouTube color="#FF0000" />
                  deeecode
                </NewTabLink>{" "}
                which is my{" "}
                <NewTabLink
                  className="link-highlight"
                  link={constants.deeecode.web}
                >
                  other persona
                </NewTabLink>
              </p>
              <p>
                I share lessons from my Career and Life in the Netherlands on{" "}
                <NewTabLink
                  className="link-highlight"
                  link={constants.social.YouTube.link}
                >
                  <YouTube color="#FF0000" /> dillionmegida
                </NewTabLink>
              </p>
              <p>
                And you can find my coding courses on
                <NewTabLink
                  className="link-highlight"
                  link={constants.deeecode.courses}
                >
                  <LinkIcon color="#FF0000" /> deeecode.com/courses
                </NewTabLink>
              </p>
              <div className="more-links">
                <p>
                  Other useful links:
                  <NewTabLink
                    className="link-highlight"
                    link={constants.social.Twitter.link}
                  >
                    <Twitter /> iamdillion
                  </NewTabLink>
                  <NewTabLink
                    className="link-highlight"
                    link={constants.social.TikTok.link}
                  >
                    <TikTok /> iamdillion
                  </NewTabLink>
                  <NewTabLink
                    className="link-highlight"
                    link={constants.social.LinkedIn.link}
                  >
                    <LinkedIn /> Dillion Megida
                  </NewTabLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <YoutubeSection deeecode={deeecode} youtube={youtube} />
      <RegexCourseSection /> */}
    </Main>
  )
}
