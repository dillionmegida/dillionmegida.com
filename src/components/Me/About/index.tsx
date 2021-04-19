import React from "react"
import constants from "../../../constants"
import { NewTabLink, AnchorLink } from "../../Link"
import Styles from "./index.module.scss"

export default function About() {
  const {
    CURRENT_WORK_NAME = null,
    CURRENT_WORK_LINK = null,
    publications,
    social,
    RESUME,
    MY_PICTURE,
  } = constants

  const pubsLength = publications.length

  return (
    <section id="about" className={Styles.AboutSection}>
      <section className={Styles.Bio}>
        <h1>About Me</h1>
        <p>
          I am a Software Engineer
          {CURRENT_WORK_NAME && CURRENT_WORK_LINK ? (
            <>
              {" "}
              at{" "}
              <NewTabLink link={CURRENT_WORK_LINK}>
                {CURRENT_WORK_NAME}
              </NewTabLink>
            </>
          ) : null}{" "}
          with great focus on the Frontend. I love building accessible
          applications on the web. I also love learning and teaching
          tech--coding, practices, tools--via technical articles, videos, and
          every means possible.
          <br />
          <br />I write mostly about web development topics and JavaScript on my
          blog here,{" "}
          {publications.map((p, i) =>
            i === pubsLength - 1 ? (
              <>
                {" "}
                and <a href={p.link}>{p.label}</a>
              </>
            ) : (
              <>
                , <a href={p.link}>{p.label}</a>
              </>
            )
          )}{" "}
          <br />
          <br />I also create Tech video content on{" "}
          <AnchorLink link={social.YouTube.link}>my YouTube Channel</AnchorLink>
          <br />
          <br />
          Co-founder, <a href="http://skulmart.com/">SkulMart</a>
          <br />
          <p>
            <b>Languages/Tools/Frameworks:</b>
            <br />
            JavaScript, SASS, React, Gatsby, Angular, Node.js, NextJS, Cypress
          </p>
        </p>
        <NewTabLink className={Styles.Resume} link={RESUME}>
          Resume
        </NewTabLink>
      </section>
      <section className={Styles.Dp}>
        <div className={Styles.ImgDiv}>
          <img alt="Profile picture" src={MY_PICTURE} />
        </div>
        <p>
          DILLION MEGIDA{" "}
          <span role="img" aria-label="Rocket Emoji">
            &#128640;
          </span>
        </p>
      </section>
    </section>
  )
}
