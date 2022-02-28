import React from "react"
import { FormattedMessage } from "react-intl"
import styled from "styled-components"
import { NewTabLink } from "../../components/Link"
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
    color: #e982a3;
    text-decoration: underline;
    font-weight: bold;
  }
`

export default function STWBlock() {
  return (
    <Section>
      <div className="container">
        <h2>
          <FormattedMessage id="stw.heading" />
        </h2>
        <p>
          <FormattedMessage id="stw.subHeading" /> 🤗
          <br />
          <br />
          <FormattedMessage id="stw.para1" />{" "}
          <NewTabLink link={STW.link}>{STW.title}</NewTabLink>.{" "}
          <FormattedMessage id="stw.para2" />{" "}
          <NewTabLink link={STW.intro}>
            <FormattedMessage id="stw.link2" />
          </NewTabLink>
        </p>
      </div>
    </Section>
  )
}
