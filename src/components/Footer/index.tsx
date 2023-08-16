import React from "react"
import styled from "styled-components"
import constants from "../../constants"
import AnchorLink, { NewTabLink } from "../AnchorLink"

const Footer = styled.footer`
  .container {
    border-top: 1px solid var(--midMainColor1);
  }

  width: 100%;
  padding: 50px 0;
  margin: 0 auto;
  text-align: center;
  background-color: var(--mainColor1);
  color: white;

  .calendly {
    color: white;
    text-decoration: underline;
    margin: 10px 0;
    color: var(--mainColor2);
    font-size: 20px;
  }

  .contacts {
    display: flex;
    justify-content: center;
    padding: 10px 0 20px;
    margin: 10px;

    & > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    a {
      display: inline-block;
      margin: 0 10px;
      color: var(--mainColor2);
      padding: 5px 10px;
      font-size: 20px;
      border-radius: 4px;
      border: 1px solid var(--mainColor1);

      &::hover,
      &:focus {
        border: 1px solid var(--mainColor2);
      }
    }

    .footer-icon {
        height: 45px;
    }
  }
`

export default () => {
  const { social } = constants

  return (
    <Footer id="contact">
      <div className="container">
        <h2>Connect with me ✨</h2>
        <NewTabLink className="calendly" link={constants.CALENDLY}>
          Schedule a meeting with me 🗓
        </NewTabLink>
        <div className="contacts">
          <div>
            <span>
              {Object.keys(social).map(s => {
                // @ts-ignore
                const sm = social[s]
                return (
                  <AnchorLink
                    className="footer-icon"
                    key={sm.link}
                    link={sm.link}
                  >
                    <sm.Icon size={30} />
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
