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
      height: max-content;
    }

    a {
      margin: 0;
      /* text-decoration: underline; */
    }
  }
  .content-block__item {
    font-size: 18px;
    margin-bottom: 20px;
    a {
      font-weight: 300;
      padding: 10px;
      /* line-height: 1.8; */
      height: max-content;
      color: white;
      opacity: 0.9;
      /* text-decoration: underline; */
      margin: 0 0 15px;
      display: block;

      &:hover {
        color: black;
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
  const YouTubeLink = link && link.includes("youtu")

  return (
    <Container>
      <h2>
        {link ? (
          <>
            {isExternalLink ? (
              <AnchorLink
                icon={YouTubeLink ? "youtube" : "link"}
                newTab
                link={link}
              >
                {title}
              </AnchorLink>
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
