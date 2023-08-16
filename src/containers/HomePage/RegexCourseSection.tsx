import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import AnchorLink from "../../components/AnchorLink"
import constants from "../../constants"

const Section = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
  margin-top: 200px;
  padding-top: 100px;
  padding-bottom: 100px;
  --bg-color: color-mix(in srgb, var(--regex) 30%, #1f1f1f);
  background: linear-gradient(transparent, var(--bg-color), transparent);

  h2 {
    color: white;
    margin-bottom: 20px;
    font-weight: 400;
  }

  .course-cover {
    border: 2px solid var(--regexMid);
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  p {
    color: white;
    font-size: 22px;
    margin: 20px 0;
    font-weight: 500;
  }
`

export default function RegexCourseSection() {
  return (
    <Section className="container">
      <h2 className="underline">my regex course</h2>

      <div className="course-cover">
        <img
          src="/img/regex-course-cover.png"
          alt="Regular Expressions Course cover"
        />
      </div>
      <p>
        <AnchorLink icon="link" newTab link={constants.SIMPLE_REGEX.link}>
          simpleregex.com
        </AnchorLink>{" "}
        🔥
      </p>
    </Section>
  )
}
