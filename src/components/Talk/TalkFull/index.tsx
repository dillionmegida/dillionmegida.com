import React from "react"
import { graphql } from "gatsby"
import Layout from "../../Layout"
import SlidesEmbed from "./SlidesEmbed"
import Helmet from "../../Helmet"

type Props = {
  data: {
    slide: { title: string; url: string; path: string; cover: string }
  }
}

export default function TalkFull({ data }: Props) {
  return (
    <Layout>
      <Helmet
        pageTitle={`${data.slide.title} | Talks`}
        pageLink={`talks/${data.slide.path}`}
        pageDesc={`A talk I gave on ${data.slide.title}`}
        imageCard={`/talk-covers/${data.slide.cover}`}
      />
      <SlidesEmbed url={data.slide.url} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    slide: slidesYaml(path: { eq: $slug }) {
      title
      url
      path
      cover
    }
  }
`
