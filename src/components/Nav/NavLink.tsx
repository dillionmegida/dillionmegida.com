import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const SLink = styled(Link)`
  padding: 0;
  margin: 0;
  font-size: 17px;
  letter-spacing: 1px;
  color: var(--mainColor3);
  font-weight: bold;
  display: block;
  margin: 7px 0;

  &:hover,
  &:focus,
  .active-link {
    transform: scale(1.1);
    color: white;
  }
`

type Props = {
  href: string
  title: string
  nav: string
}

const navLink = ({ href, title, nav }: Props) => {
  return (
    <SLink to={`/${href}`} activeClassName="active-link" title={title}>
      {nav.toUpperCase()}
    </SLink>
  )
}

export default navLink
