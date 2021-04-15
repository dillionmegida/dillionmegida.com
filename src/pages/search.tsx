import React from "react"

import Layout from "../components/Layout"
import Search from "../components/Blog/Search"
import Helmet from "../components/Helmet"

export default () => (
  <Layout>
    <Helmet
      pageTitle="Search Articles - Dillion's Blog"
      pageLink="/search"
      pageDesc="Search articles in Dillion's Blog"
    />
    <Search />
  </Layout>
)
