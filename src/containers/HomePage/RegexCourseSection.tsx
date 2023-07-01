import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { NewTabLink } from "../../components/Link"

const Section = styled.section`
  position: relative;
  z-index: 1;

  .course-cover {
    border: 2px solid var(--regexMid);
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  p {
    text-align: center;
    color: white;
    font-size: 22px;
    margin: 10px 0;
  }

  .a-link {
    --preColor: var(--regexMid);
    --color: var(--regex);
    font-weight: bold;
  }
`

export default function RegexCourseSection() {
  return (
    <Section className="container">
      <div className="course-cover">
        <img src="/img/regex-course-cover.png" alt="Regular Expressions Course cover" />
      </div>
      <p>
        Learn more about{" "}
        <NewTabLink className="a-link" link="https://deeecode.com/courses/regex/">
          this simplified course
        </NewTabLink>{" "} 😊
      </p>
    </Section>
  )
}
