import React from "react"
import Helmet from "../components/Helmet"
import styled from "styled-components"
import Layout from "../components/Layout"
import Masonry from "react-masonry-css"
import { NewTabLink } from "../components/AnchorLink"
import { useMedia } from "use-media"
import { VIDEOS_FEEDBACK } from "../constants"
import Link from "../components/Icon/Link"

const Wrapper = styled.div`
  &.container {
    padding-top: 30px;
  }

  h1 {
    color: white;
    text-align: center;
    font-size: clamp(1.3rem, 6vw, 1.7rem);
  }

  .tagline {
    color: var(--text-color);
    text-align: center;
    margin: 0 auto 20px;
    max-width: 500px;
  }

  .a-link {
    color: yellow;
  }

  .my-masonry-grid {
    display: flex;
    margin-left: -30px;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px;
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    margin-bottom: 50px;
  }
`

const Feedback = styled.div`
  margin-top: 40px;

  .fb-item {
    border: 2px solid var(--midMainColor1);
    transition: border-color 300ms;
    border-radius: 5px;
    display: block;
    margin-bottom: 30px;
    overflow: hidden;
    padding: 20px;
    text-align: center;
    font-size: clamp(1rem, 6vw, 1.2rem);

    &:hover {
      border-color: var(--tertiary-color);
      background-color: var(--midMainColor1);
    }

    .fb-text {
      line-height: 1.4em;
      color: var(--text-color);
      margin-bottom: 15px;
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .fb-name {
      color: var(--tertiary-color);
      font-size: 0.8em;

      &::before {
        content: "- ";
      }
    }
  }
`

export default function VideosFeedback() {
  const isWiderThan800 = useMedia({ minWidth: 800 })

  return (
    <Layout>
      <Helmet
        pageTitle="Feedback on my YouTube Videos"
        pageDesc="A collation of some of the feedback I've gotten on my tutorial videos"
        imageCard="/img/feedback/cover.png"
        pageLink="/videos-feedback"
      />
      <Wrapper className="container">
        <h1>
          Feedback on my{" "}
          <NewTabLink
            className="a-link"
            link="https://www.youtube.com/c/deeecode"
          >
            Tutorial videos
          </NewTabLink>
        </h1>
        <p className="tagline">It seems people love my teaching 😉</p>
        <Feedback>
          <Masonry
            breakpointCols={isWiderThan800 ? 2 : 1}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {VIDEOS_FEEDBACK.map(fb => (
              <NewTabLink className="fb-item" link={fb.link} key={fb.name}>
                <p className="fb-text" dangerouslySetInnerHTML={{__html: fb.text.replace(/\n/g, '<br/>')}} />
                <div className="footer">

                <span className="fb-name">@{fb.name}</span>{" "}
                <Link color="var(--tertiary-color)" />
                </div>
              </NewTabLink>
            ))}
          </Masonry>
        </Feedback>
      </Wrapper>
    </Layout>
  )
}
