import React from "react"
import Styles from "./index.module.scss"
import { IntlProvider, FormattedMessage } from "react-intl"

import en from "../../languages/en"
import fr from "../../languages/fr"

import Header from "../Header"
import Footer from "../Footer"

const messages = { en, fr }

type Props = {
  children: React.ReactNode
}

const ACCEPTED_LANGS = ["en", "fr"]

const Layout = ({ children }: Props) => {
  const url = location.pathname
  const langKey: "en" | "fr" = (ACCEPTED_LANGS.find(
    lang => lang === url.replace(/^\//, "")
  ) || "en") as "en" | "fr"

  return (
    <IntlProvider locale={langKey} messages={messages[langKey]}>
      <Header />
      <div className={Styles.Children}>{children}</div>
      <Footer />
    </IntlProvider>
  )
}

export default Layout
