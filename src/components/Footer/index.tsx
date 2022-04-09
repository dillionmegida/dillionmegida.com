import React from "react"
import styled from "styled-components"
import constants from "../../constants"
import { AnchorLink, NewTabLink } from "../Link"
import Styles from "./index.module.scss"

const Footer = styled.footer`
  .container {
    border-top: 1px solid var(--midMainColor1);
  }
`

export default () => {
  const { social } = constants

  return (
    <Footer id="contact" className={`${Styles.ContactSection}`}>
      <div className="container">
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
      </div>
    </Footer>
  )
}
