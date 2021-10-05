import React from "react"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import styled from "styled-components"
import constants from "../../constants"

const Container = styled.div``

type Props = {
  url: string
  postId: string
  postTitle: string
}

const PostTemplate = ({ url, postId, postTitle }: Props) => {
  let disqusConfig = {
    url: "https://" + constants.SITE_URL + url,
    identifier: postId,
    title: postTitle,
  }
  return (
    <Container>
      <CommentCount config={disqusConfig} placeholder={"..."} />
      <Disqus config={disqusConfig} />
    </Container>
  )
}

export default PostTemplate
