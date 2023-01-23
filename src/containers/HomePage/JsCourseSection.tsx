import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Section = styled.section`
  position: relative;
  z-index: 1;

  .course-cover {
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
    --preColor: var(--javascriptMid);
    --color: var(--javascript);
    font-weight: bold;
  }
`

export default function JsCourseSection() {
  return (
    <Section className="container">
      <div className="course-cover">
        <img src="/img/js-course-cover.png" alt="JavaScript Course cover" />
      </div>
      <p>
        Learn more about{" "}
        <Link className="a-link" to="/javascript">
          this simplified course
        </Link>{" "}
        I'm working on 😊
      </p>
    </Section>
  )
}
