import React from "react"
import Helmet from "../components/Helmet"
import styled from "styled-components"
import Layout from "../components/Layout"
import Masonry from "react-masonry-css"
import { NewTabLink } from "../components/AnchorLink"
import { useMedia } from "use-media"

const Wrapper = styled.div`
  &.container {
    padding-top: 30px;
  }

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

const Images = styled.div`
  a {
    border: 1px solid white;
    transition: border-color 300ms;
    border-radius: 5px;
    display: block;
    margin-bottom: 30px;
    overflow: hidden;

    &:hover {
      border-color: yellow;
    }

    img {
      width: 100%;
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
        <p>It seems people love my teaching 😉</p>
        <Images>
          <Masonry
            breakpointCols={isWiderThan800 ? 2 : 1}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {[
              {
                src: "feedback-1.png",
                link:
                  "https://www.youtube.com/watch?v=X6wfxggHO5A&lc=UgwBpbdBE-f-1hvYqoR4AaABAg",
              },
              {
                src: "feedback-2.png",
                link:
                  "https://www.youtube.com/watch?v=ksatclkx84s&lc=Ugx1B6q8VvohIynsLax4AaABAg",
              },
              {
                src: "feedback-3.png",
                link:
                  "https://www.youtube.com/watch?v=l7GIFU6VKB8&lc=Ugz1d7QArOl_1yCze294AaABAg",
              },
              {
                src: "feedback-4.png",
                link:
                  "https://www.youtube.com/watch?v=X_wF47qWF-I&lc=UgwhsCYm3a8C4HqtASx4AaABAg",
              },
              {
                src: "feedback-5.png",
                link:
                  "https://www.youtube.com/watch?v=X6wfxggHO5A&lc=UgzKfgHP1kS0h92n3U94AaABAg",
              },
              {
                src: "feedback-6.png",
                link:
                  "https://www.youtube.com/watch?v=HyeNfWZBut8&lc=UgwFYtTQyX5UKtAnwOJ4AaABAg",
              },
              {
                src: "feedback-7.png",
                link:
                  "https://www.youtube.com/watch?v=SqF-rD2AIiw&lc=UgzR3ft6bmT8GI63zYJ4AaABAg",
              },
              {
                src: "feedback-8.png",
                link:
                  "https://www.youtube.com/watch?v=KVTyPpUNWz4&lc=UgyVe4Dgok9xvTojTmB4AaABAg",
              },
              {
                src: "feedback-9.png",
                link:
                  "https://www.youtube.com/watch?v=c0t5prvd92Q&lc=UgzcmnVE6_G9jbDXrb94AaABAg",
              },
              {
                src: "feedback-10.png",
                link:
                  "https://www.youtube.com/watch?v=nlKJmAvZoxo&lc=UgxmMn-JmV8_uaSFlFl4AaABAg",
              },
              {
                src: "feedback-11.png",
                link:
                  "https://www.youtube.com/watch?v=xX4xtlgC1Vw&lc=Ugwtr6DyIll8VWFksWx4AaABAg",
              },
              {
                src: "feedback-12.png",
                link:
                  "https://www.youtube.com/watch?v=qlu2kAI81pk&lc=UgyGMSxgobUmu9-lRSp4AaABAg",
              },
              {
                src: "feedback-13.png",
                link:
                  "https://www.youtube.com/watch?v=dD6O4IW9pu0&lc=Ugwlm585hvjnSDJmZxB4AaABAg.9zOtXXpZR4v9zQTxTvg9oY",
              },
            ].map(img => (
              <NewTabLink link={img.link} key={img.src}>
                <img src={`/img/feedback/${img.src}`} alt="" />
              </NewTabLink>
            ))}
          </Masonry>
        </Images>
      </Wrapper>
    </Layout>
  )
}
