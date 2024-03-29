import React, { ReactNode } from "react"
import { graphql } from "gatsby"
import { GqlPostFull } from "../../../interfaces/Post"
import PostTemplate from "./PostTemplate"

type Props = {
  data: {
    mdx: GqlPostFull
  }
  children: ReactNode
}

export default function Mdx({ data, children }: Props) {
  const post = data.mdx

  return <PostTemplate post={post}>{children}</PostTemplate>
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      body
      frontmatter {
        title
        date
        pageDescription
        pageKeywords
        cover
        tags
      }
    }
  }
`
