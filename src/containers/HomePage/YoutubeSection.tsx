import styled from "styled-components"
import { AllContentGql } from "../../interfaces/Content"
import React from "react"
import YouTube from "react-youtube"
import { Link } from "gatsby"
import constants, { FEATURED_CODING_VIDEOS } from "../../constants"
import AnchorLink from "../../components/AnchorLink"

const Section = styled.section`
  width: 100%;
  margin-top: 200px;
  padding-top: 100px;
  padding-bottom: 100px;
  --bg-color: color-mix(in srgb, var(--secondary-color) 50%, #1f1f1f);
  background: linear-gradient(transparent, var(--bg-color), transparent);

  h2 {
    margin-bottom: 20px;
    font-weight: 400;
  }

  .grid {
    display: grid;
    --columns: 2;
    grid-template-columns: repeat(var(--columns), 1fr);
    gap: 20px;
    margin-bottom: 10px;

    @media (max-width: 700px) {
      --columns: 1;
    }
  }
`

type Props = {
  youtube: AllContentGql
  deeecode: AllContentGql
}

const { pageLinks, social } = constants

export default function YoutubeSection({ youtube, deeecode }: Props) {
  return (
    <Section className="container">
      <h2 className="underline">featured coding videos</h2>
      <div className="grid">
        {/* {deeecode.edges.map(({ node }) =>
          node.content.slice(0, 4).map(({ link }) => {
            const videoId = link.split(/(=|\/)/).pop()

            return (
              <YouTube
                opts={{ width: "100%", height: "200px" }}
                key={videoId}
                videoId={videoId}
              />
            )
          })
        )} */}
        {FEATURED_CODING_VIDEOS.map(link => {
          const videoId = link.split(/(=|\/)/).pop()

          return (
            <YouTube
              opts={{ width: "100%", height: "200px" }}
              key={videoId}
              videoId={videoId}
              className="youtube"
            />
          )
        })}
        {/* {youtube.edges.map(({ node }) =>
          node.content.slice(0, 2).map(({ link }) => {
            const videoId = link.split(/(=|\/)/).pop()

            return (
              <YouTube
                opts={{ width: "100%", height: "200px" }}
                key={videoId}
                videoId={videoId}
              />
            )
          })
        )} */}
      </div>
      <AnchorLink newTab icon="youtube" link={constants.deeecode.yt}>
        view more
      </AnchorLink>
    </Section>
  )
}
