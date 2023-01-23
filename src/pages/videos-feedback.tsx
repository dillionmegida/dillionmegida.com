import React from "react"
import Helmet from "../components/Helmet"
import styled from "styled-components"
import Layout from "../components/Layout"
import { NewTabLink } from "../components/Link"

const Wrapper = styled.div`
  h1 {
    color: white;
    text-align: center;
    font-size: 25px;
  }

  p {
    color: white;
    text-align: center;
    margin: 0 auto 20px;
    max-width: 500px;
    font-size: 20px;
  }

  .a-link {
    --color: var(--mainColor3);
  }
`

const Images = styled.div`
  img {
    width: 100%;
  }
`

export default function VideosFeedback() {
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
        <p>
          While I'm still growing, and have a lot of videos yet to make, it's so
          fulfilling to see how the videos I've made so far has been helpful to
          different people around the world. Here, I share some of these
          feedback 😇
        </p>
        <Images>
          <img src="/img/feedback/feedback-1.png" alt="" />
          <img src="/img/feedback/feedback-2.png" alt="" />
        </Images>
      </Wrapper>
    </Layout>
  )
}
