import React from "react"
import styled from "styled-components"

const Iframe = styled.iframe`
  width: 100%;
  height: calc(100vh - 100px);
`

type Props = {
  url: string
}

export default function SlidesEmbed({ url }: Props) {
  return (
    <Iframe
      src={`${url}?start=false&loop=false&delayms=3000`}
      frameBorder="0"
      allowFullscreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
    ></Iframe>
  )
}
