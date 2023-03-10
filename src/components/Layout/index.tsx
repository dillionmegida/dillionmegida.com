import React from "react"

import Header from "../Header"
import Footer from "../Footer"
import styled from "styled-components"

const Children = styled.div`
  min-height: 600px;
  background-color: var(--mainColor1);
  padding-bottom: 80px;
`

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Children>{children}</Children>
      <Footer />
    </>
  )
}

export default Layout
