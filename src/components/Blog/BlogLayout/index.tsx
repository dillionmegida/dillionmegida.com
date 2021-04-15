import React from "react"

import Newsletter from "../../Newsletter"
import Layout from "../../Layout"
import WithLove from "../WithLove"

type Props = {
  children: React.ReactNode
}

const BlogLayout = ({ children }: Props) => {
  return (
    <Layout>
      {children}
      <WithLove />
      <Newsletter />
    </Layout>
  )
}

export default BlogLayout
