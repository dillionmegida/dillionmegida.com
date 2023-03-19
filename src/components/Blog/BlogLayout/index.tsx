import React from "react"

import Layout from "../../Layout"
import WithLove from "../WithLove"
import RegexCourseSection from "../../../containers/HomePage/RegexCourseSection"

type Props = {
  children: React.ReactNode
}

const BlogLayout = ({ children }: Props) => {
  return (
    <Layout>
      {children}
      <WithLove />
      <RegexCourseSection />
      {/* <Newsletter /> */}
    </Layout>
  )
}

export default BlogLayout
