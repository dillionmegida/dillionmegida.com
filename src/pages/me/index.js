import React from "react"
import Styles from "./index.module.scss"

import Header from "../../components/Header"
import AboutMe from "../../components/Me/About"
import Projects from "../../components/Me/Projects"
import Footer from "../../components/Footer"
import Helmet from "../../components/Helmet"

export default () => {
  return (
    <>
      <Helmet
        PageTitle="About me - Dillion Megida"
        PageLink="/me"
        PageDescription="Dillion is a Frontend Engineer, a Tecnical Writer and a Graphics Designer."
        smoothScroll
      />
      <div className={Styles.LandingImage}>
        <Header />
        <div className={Styles.Intro}>
          <p className={Styles.Big}>
            Hi{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
            , I'm <span>Dillion Megida</span>
          </p>
          <p className={Styles.Small}>
            I'm a Frontend Engineer and Technical Writer based in Nigeria.
          </p>
        </div>
      </div>
      <main>
        <AboutMe />
        <Projects />
        <Footer />
      </main>
    </>
  )
}
