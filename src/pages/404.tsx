import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Helmet from "../components/Helmet"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2em;
  font-size: clamp(1.3rem, 6vw, 3rem);

  h1 {
    font-size: 1.5em;
    color: var(--text-color);
  }

  a {
    font-size: 1.1em;
    transition: background 300ms;
    color: yellow;
    padding: 0 6px;
    margin: 20px 3px;
    height: 1.3em;
    background: var(--midMainColor1);
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    position: relative;

    &:hover {
      background: linear-gradient(
        var(--secondary-color),
        var(--tertiary-color)
      );
      color: black;
    }
  }
`

let ErrorPage = () => (
  <Layout>
    <Helmet
      pageTitle="Page Not Found : ("
      pageLink="404"
      pageDesc="Page Not Found."
    />
    <Container>
      <h1>Page Not Found 🤧</h1>
      <Link to="/" title="Dillion Megida's Blog">
        Go To Homepage
      </Link>
    </Container>
  </Layout>
)

export default ErrorPage
