import React from "react"
import styled from "styled-components"
import { NEWSLETTER } from "../../constants"
import { NewTabLink } from "../AnchorLink"

const Container = styled.section`
  max-width: 500px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background-color: rgba(255, 255, 255, 0.08);
  margin: 20px auto 40px;
  padding: 40px;
  border-radius: 5px;
  position: relative;
  z-index: 100;

  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }

  h2 {
    margin: 0 0 5px;
    text-align: center;
    font-size: 32px;
    a {
      color: white;
    }
  }

  @media (max-width: 400px) {
    padding: 25px;

    h2 {
      font-size: 25px;
    }
  }

  .newsletter-info {
    text-align: center;
    max-width: 100%;
    font-size: 22px;
    color: white;
    margin: 0 0 20px;
  }

  form {
    display: flex;
  }

  .revue-form-group {
    margin-bottom: 15px;
    flex: 1;

    input {
      padding: 15px;
      width: 100%;
      background-color: #faf8fa;
      border: 1px solid var(--mainColor1);
      border-radius: 0;
      border-right: 0;
      font-family: var(--sec-font);
    }
  }

  .revue-form-actions {
    margin-bottom: 20px;
    .submit-input {
      font-family: var(--sec-font);
      padding: 15px;
      width: 100%;
      background-color: var(--mainColor1);
      color: white;
      border: 1px solid var(--mainColor1);
      border-radius: 0;
      cursor: pointer;
    }
  }

  .revue-form-footer {
    color: white;
    line-height: 1.8;
    font-size: 18px;
    text-align: center;
    a {
      color: var(--mainColor2);
    }
  }
`

export default () => (
  <Container id="revue-embed">
    <div className="wrapper">
      <h2>
        <NewTabLink link={NEWSLETTER.link}>{NEWSLETTER.title}</NewTabLink>
      </h2>
      <p className="newsletter-info">{NEWSLETTER.description}</p>
      <form
        action="http://newsletter.dillionmegida.com/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <div className="revue-form-group">
          <input
            className="revue-form-field"
            placeholder="Your email address..."
            type="email"
            name="member[email]"
            id="member_email"
          />
        </div>
        <div className="revue-form-actions">
          <input
            className="submit-input"
            value="Subscribe"
            type="submit"
            name="member[subscribe]"
            id="member_submit"
          />
        </div>
      </form>
      <div className="revue-form-footer">
        By subscribing, you agree with Revue’s{" "}
        <a target="_blank" href="https://www.getrevue.co/terms">
          Terms of Service
        </a>{" "}
        and{" "}
        <a target="_blank" href="https://www.getrevue.co/privacy">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  </Container>
)
