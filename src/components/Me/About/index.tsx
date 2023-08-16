import React from "react"
import styled from "styled-components"
import constants from "../../../constants"
import { NewTabLink, AnchorLink } from "../../AnchorLink"

const AboutSection = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 18px;
  padding: 0 0 50px;
  background-color: var(--mainColor2);

  h1 {
    font-size: 30px;
  }

  .bio {
    max-width: 600px;
    padding: 20px;

    p {
      font-size: 1.2rem;
      line-height: 1.5;
    }

    a:not(.Resume) {
      color: var(--lightBlue);
      border: 1px solid transparent;
      font-weight: bold;
      text-decoration: underline;
    }

    a:focus {
      outline-offset: 2px;
      outline: 2px solid var(--lightBlue);
      text-decoration: none;
    }
  }

  .resume {
    &:is(:hover, :focus) {
      border-color: var(--lightBlue);
    }
  }

  .bio,
  .resume {
    margin-top: 20px;
    width: max-content;
    display: block;
    padding: 2px;
    font-size: 20px;
    text-decoration: none;
    padding: 5px 10px;
    background-color: var(--mainColor1);
    color: white;
    border-radius: 4px;
    border: 2px solid var(--mainColor1);
  }

  .dp {
    text-align: center;

    .image-div {
      max-width: 300px;
      max-height: 300px;
      overflow: hidden;
      margin: 50px 0 0;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
      border-radius: 80px 20px;
      animation: image-animate 5s linear infinite alternate;

      @keyframes image-animate {
        25% {
          border-radius: 20px 80px;
        }
        50% {
          border-radius: 80px 20px;
        }
        75% {
          border-radius: 20px 80px;
        }
        100% {
          border-radius: 80px 20px;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`

export default function About() {
  const {
    CURRENT_WORK_NAME = null,
    CURRENT_WORK_LINK = null,
    publications,
    social,
    RESUME,
    MY_PICTURE,
  } = constants

  const pubsLength = publications.length

  return (
    <AboutSection id="about">
      <div className="bio">
        <h1>About Me</h1>
        <p>
          I am a Software Engineer
          {CURRENT_WORK_NAME && CURRENT_WORK_LINK ? (
            <>
              {" "}
              at{" "}
              <NewTabLink link={CURRENT_WORK_LINK}>
                {CURRENT_WORK_NAME}
              </NewTabLink>
            </>
          ) : null}{" "}
          with great focus on the Frontend. I love building accessible
          applications on the web. I also love learning and teaching
          tech--coding, practices, tools--via technical articles, videos, and
          every means possible.
          <br />
          <br />I write mostly about web development topics and JavaScript on my
          blog here,{" "}
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
          <AnchorLink link={social.YouTube.link}>my YouTube Channel</AnchorLink>
          <br />
          <br />
          Co-founder, <a href="http://skulmart.com/">SkulMart</a>
          <br />
          <p>
            <b>Languages/Tools/Frameworks:</b>
            <br />
            JavaScript, SASS, React, Gatsby, Angular, Node.js, NextJS, Cypress
          </p>
        </p>
        <NewTabLink className="resultsMenu" link={RESUME}>
          Resume
        </NewTabLink>
      </div>
      <div className="dp">
        <div className="image-div">
          <img alt="Profile picture" src={MY_PICTURE} />
        </div>
        <p>
          DILLION MEGIDA{" "}
          <span role="img" aria-label="Rocket Emoji">
            &#128640;
          </span>
        </p>
      </div>
    </AboutSection>
  )
}
