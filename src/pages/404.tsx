import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Helmet from "../components/Helmet"

let ErrorPage = () => (
  <Layout>
    <Helmet
      pageTitle="Page Not Found : ("
      pageLink="404"
      pageDesc="Page Not Found."
    />
    <section
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          textAlign: "center",
          color: "var(--mainColor2)",
        }}
      >
        Page Not Found 🤧
      </h1>
      <Link to="/" title="Dillion Megida's Blog">
        <section
          style={{
            display: "block",
            backgroundColor: "var(--mainColor1)",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            fontSize: "20px",
            borderBottom: "5px solid var(--mainColor2)",
          }}
        >
          Go To Homepage
        </section>
      </Link>
    </section>
  </Layout>
)

export default ErrorPage
