import React from "react"
import constants from "../../constants"
import { AnchorLink, NewTabLink } from "../Link"
import Styles from "./index.module.scss"

export default () => {
  const { social } = constants

  return (
    <footer id="contact" className={Styles.ContactSection}>
      <h2>Connect with me ✨</h2>
      <NewTabLink className={Styles.calendly} link={constants.CALENDLY}>
        Schedule a meeting with me 🗓
      </NewTabLink>
      <div className={Styles.Contacts}>
        <div>
          <span>
            {Object.keys(social).map(s => {
              // @ts-ignore
              const sm = social[s]
              return (
                <AnchorLink key={sm.link} link={sm.link}>
                  <sm.Icon size={30} color="var(--mainColor2)" />
                </AnchorLink>
              )
            })}
          </span>
        </div>
      </div>
    </footer>
  )
}
