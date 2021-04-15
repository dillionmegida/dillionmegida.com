import React from "react"
import Styles from "./index.module.scss"

import Header from "../Header"
import Footer from "../Footer"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className={Styles.Children}>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
