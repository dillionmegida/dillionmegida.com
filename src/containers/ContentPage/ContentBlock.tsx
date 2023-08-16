import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import AnchorLink, { NewTabLink } from "../../components/AnchorLink"

const Container = styled.div`
  h2 {
    margin: 0 0 10px;
    &,
    a {
      color: white;
      opacity: 0.9;
    }

    a {
      text-decoration: underline;
    }
  }
  .content-block__item {
    font-size: 18px;
    margin-bottom: 20px;
    a {
      font-weight: 300;
      line-height: 1.8;
      color: white;
      opacity: 0.9;
      /* text-decoration: underline; */
      margin-bottom: 15px;
      display: block;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

type Props = {
  heading: {
    title: string
    link: string | null
  }
  items: { link: string; title: string }[]
}

export default function ContentBlock({
  heading: { title, link },
  items,
}: Props) {
  const isExternalLink = link && link.startsWith("http")

  return (
    <Container>
      <h2>
        {link ? (
          <>
            {isExternalLink ? (
              <NewTabLink link={link}>{title}</NewTabLink>
            ) : (
              <Link to={link}>{title}</Link>
            )}
          </>
        ) : (
          title
        )}
      </h2>
      <div className="content-block__items">
        {items.map(i => (
          <div key={i.title} className="content-block__item">
            <AnchorLink link={i.link}>{i.title}</AnchorLink>
          </div>
        ))}
      </div>
    </Container>
  )
}
