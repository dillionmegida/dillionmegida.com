import React from "react"
import styled from "styled-components"
import { NewTabLink } from "../../components/AnchorLink"
import { STW } from "../../constants"

const Section = styled.section`
  background-color: var(--mainColor1);
  border-radius: 10px;
  border: 1px solid #e982a3;

  h2 {
    color: #e982a3;
    font-size: 30px;
    margin-bottom: 10px;
  }

  p {
    color: white;
    font-weight: 300;
    line-height: 1.7;
    font-size: 24px;
  }

  a {
    font-weight: bold;
    &.a-link {
      --color: #e982a3;
    }
  }
`

export default function STWBlock() {
  return (
    <Section>
      <div className="container">
        <h2>Are you interested in Getting Started with Technical Writing?</h2>
        <p>
          Here's something for you 🤗
          <br />
          <br />
          As a technical writer, I shared my knowledge and experience on this
          platform:{" "}
          <NewTabLink className="a-link" link={STW.link}>
            {STW.title}
          </NewTabLink>
          . Check out more about the platform here:{" "}
          <NewTabLink className="a-link" link={STW.intro}>
            Introduction to STW
          </NewTabLink>
        </p>
      </div>
    </Section>
  )
}
