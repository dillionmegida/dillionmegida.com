import React, { useState } from "react"
import Styles from "./index.module.scss"

import { Link } from "gatsby"
import constants from "../../constants"

const Header = () => {
  const [showDrawer, setDrawerStatus] = useState(false)

  const Links = () => (
    <>
      <Link
        activeClassName={Styles.Active}
        onClick={() => setDrawerStatus(false)}
        to={constants.pageLinks.HOME}
      >
        Blog
      </Link>
      <Link
        activeClassName={Styles.Active}
        onClick={() => setDrawerStatus(false)}
        to={constants.pageLinks.CONTENTS}
      >
        Contents
      </Link>
      <Link
        activeClassName={Styles.Active}
        onClick={() => setDrawerStatus(false)}
        to={constants.pageLinks.ME}
      >
        About
      </Link>
      <Link
        activeClassName={Styles.Active}
        onClick={() => setDrawerStatus(false)}
        to={constants.pageLinks.ME + "#projects"}
      >
        Projects
      </Link>
      <Link
        onClick={() => setDrawerStatus(false)}
        to={constants.pageLinks.ME + "#contact"}
      >
        Contact
      </Link>
    </>
  )

  return (
    <header className={Styles.Header}>
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
    </header>
  )
}

export default Header
