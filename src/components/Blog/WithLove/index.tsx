import React from "react"
import styled from "styled-components"

const Para = styled.p`
  max-width: 300px;
  text-align: center;
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  line-height: 25px;
  color: white;

  .emoji {
    font-size: 20px;
    color: red;
  }

  a {
    color: var(--mainColor2);
    font-weight: bold;
  }
`

const WithLove = () => (
  <Para>
    Articles written with{" "}
    <span className="emoji" role="img">
      {" "}
      &#10084;{" "}
    </span>
    by
    <br />
    <a href="http://twitter.com/iamdillion" title="Dillion Megida">
      Dillion Megida
    </a>
  </Para>
)

export default WithLove
