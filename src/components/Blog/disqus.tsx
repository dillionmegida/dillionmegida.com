import React from "react"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

type Props = {
  url: string
  postId: string
  postTitle: string
}

const PostTemplate = ({ url, postId, postTitle }: Props) => {
  let disqusConfig = {
    url: url,
    identifier: postId,
    title: postTitle,
  }
  return (
    <>
      <h1>{postTitle}</h1>
      <CommentCount config={disqusConfig} placeholder={"..."} />
      <Disqus config={disqusConfig} />
    </>
  )
}

export default PostTemplate
