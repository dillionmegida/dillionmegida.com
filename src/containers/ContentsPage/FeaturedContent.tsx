import React from "react"
import styled from "styled-components"

const Container = styled.div<{ bg?: string }>`
  min-height: 300px;
  width: 100%;
  margin: 0 0 40px;
  padding: 20px;
  background: ${({ bg }) => (bg ? `url(${bg})` : "none")};
  background-color: var(--mainColor1);
  background-size: cover;
  background-blend-mode: overlay;

  .featured-text {
    color: var(--mainColor3);
  }
`

export default function FeaturedContent() {
  const type = process.env.FEATURED_CONTENT_TYPE
  const link = process.env.FEATURED_CONTENT_LINK
  const cover = process.env.FEATURED_CONTENT_COVER
  const title = process.env.FEATURED_CONTENT_TITLE

  if (!type || !link) return null

  return (
    <Container bg={cover}>
      <span className="featured-text">Featured 🌟</span>
    </Container>
  )
}
