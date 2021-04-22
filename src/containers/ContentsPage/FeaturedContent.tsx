import React from "react"
import styled from "styled-components"

const Container = styled.div<{ bg?: string }>`
  min-height: 300px;
  width: 100%;
  background-color: var(--mainColor1);
  margin: 0 0 40px;
  padding: 20px;
  background: ${({ bg }) => (bg ? `url(${bg})` : "none")};

  .featured-text {
    color: var(--mainColor3);
  }
`

export default function FeaturedContent() {
  const {
    FEATURED_CONTENT_TYPE: type = null,
    FEATURED_CONTENT_LINK: link = null,
    FEATURED_CONTENT_COVER: cover = null,
  } = process.env

  console.log({...process.env})

  if (!type || !link) return null

  return (
    <Container bg={cover}>
      <span className="featured-text">Featured 🌟</span>
    </Container>
  )
}
