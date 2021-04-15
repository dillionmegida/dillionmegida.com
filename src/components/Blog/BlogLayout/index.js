import React from "react"

import Newsletter from "../../Newsletter"
import Layout from "../../Layout"
import WithLove from "../WithLove"

const BlogLayout = (props) => {
  return (
    <Layout {...props}>
      {props.children}
      <WithLove />
      <Newsletter />
    </Layout>
  )
}

export default BlogLayout
