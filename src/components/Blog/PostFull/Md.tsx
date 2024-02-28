import React from "react"
import { graphql } from "gatsby"
import { GqlPostFull } from "../../../interfaces/Post"
import PostTemplate from "./PostTemplate"

type Props = {
  data: {
    markdownRemark: GqlPostFull
  }
}

export default function Md({ data }: Props) {
  const post = data.markdownRemark

  return <PostTemplate post={post} />
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      timeToRead
      frontmatter {
        title
        date
        readTime
        pageDescription
        pageKeywords
        cover
        tags
        video
        canonicalLink
        questions {
          name
          options
          answer
        }
      }
    }
  }
`
