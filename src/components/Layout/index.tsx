import React from "react"

import Header from "../Header"
import Footer from "../Footer"
import styled from "styled-components"

const Wrapper = styled.div``

const Children = styled.div`
  min-height: 600px;
  padding-bottom: 80px;
  background-color: color-mix(in srgb, white, transparent 98%);
`

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      <Children>{children}</Children>
      <Footer />
    </Wrapper>
  )
}

export default Layout
