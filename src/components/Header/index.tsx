import React, { useState } from "react"
import Styles from "./index.module.scss"

import { Link } from "gatsby"
import constants from "../../constants"
import styled from "styled-components"

const _Header = styled.header`
  background-color: var(--mainColor1);
  padding: 10px 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
`

const _Link = styled(Link)`
  display: inline-block;
  color: var(--mainColor2);
  font-size: 16px;
  margin: 0 10px;
  padding: 7px;
  width: 90px;
  text-align: center;

  &.active {
    color: var(--lightBlue);
  }

  &:hover {
    color: var(--lightBlue);
  }
`

const Header = () => {
  const [showDrawer, setDrawerStatus] = useState(false)

  const Links = () => (
    <>
      {[
        { label: "Dillion", link: constants.pageLinks.HOME },
        { label: "Blog", link: constants.pageLinks.BLOG },
        { label: "Contents", link: constants.pageLinks.CONTENTS },
      ].map(l => (
        <_Link
          to={l.link}
          onClick={() => setDrawerStatus(false)}
          activeClassName="active"
        >
          {l.label}
        </_Link>
      ))}
    </>
  )

  return (
    <_Header className={Styles.Header}>
      <Link className={Styles.Me} to="/">
        <div className={Styles.Img}>
          <img src={constants.MY_PICTURE} alt="Profile picture" />
        </div>
      </Link>
      <nav>
        <Links />
      </nav>

      <button
        className={Styles.ShowDrawer}
        onClick={() => setDrawerStatus(true)}
      >
        <i className="fa fa-bars"></i>
      </button>
      {showDrawer && (
        <div className={Styles.Drawer}>
          <button onClick={() => setDrawerStatus(false)}>
            <i className="fa fa-times"></i>
          </button>
          <nav>
            <Links />
          </nav>
          <span>2019 - {new Date().getFullYear()} &copy; Dillion Megida</span>
        </div>
      )}
    </_Header>
  )
}

export default Header
