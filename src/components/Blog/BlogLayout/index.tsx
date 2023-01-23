import React from "react"

import Newsletter from "../../Newsletter"
import Layout from "../../Layout"
import WithLove from "../WithLove"
import JsCourseSection from "../../../containers/HomePage/JsCourseSection"

type Props = {
  children: React.ReactNode
}

const BlogLayout = ({ children }: Props) => {
  return (
    <Layout>
      {children}
      <WithLove />
      <JsCourseSection />
      {/* <Newsletter /> */}
    </Layout>
  )
}

export default BlogLayout
