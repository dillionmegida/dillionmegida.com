import React from "react"
import { Link } from "gatsby"
import Styles from "./index.module.scss"

type Props = {
  href: string
  title: string
  nav: string
}

const navLink = ({ href, title, nav }: Props) => {
  return (
    <Link
      className={Styles.Link}
      to={`/${href}`}
      activeClassName={Styles.ActiveLink}
      title={title}
    >
      {nav.toUpperCase()}
    </Link>
  )
}

export default navLink
