import React from "react"
import Styles from "./index.module.css"

export default () => {
  return (
    <footer name="contact" className={Styles.ContactSection}>
      <h2>Contact Me</h2>
      <p>via the following:</p>
      <div className={Styles.Contacts}>
        <div>
          <span>
            <a className={Styles.Contact} href="mailto:dillionmegida@gmail.com">
              <i className="fa fa-envelope"></i>
            </a>
          </span>
          <span>
            <a
              className={Styles.sm}
              href="https://twitter.com/iamdillion"
              title="Twitter Profile"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              className={Styles.sm}
              href="https://github.com/dillionmegida"
              title="Github Profile"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              className={Styles.sm}
              href="https://www.facebook.com/dillion.megida"
              title="Facebook Profile"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              className={Styles.sm}
              href="https://www.linkedin.com/in/dillionmegida/"
              title="LinkedIn Profile"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
