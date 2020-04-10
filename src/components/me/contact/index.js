import React from "react"
import Styles from "./index.module.css"
import Newsletter from "../../../components/common/Newsletter"

export default () => {
    return (
        <section name='contact' className={Styles.ContactSection}>
            <h2>Contact Me</h2>
            <p>via the following:</p>
            <div className={Styles.Contacts}>
                <div>
                    <span>
                    <a
                        className={Styles.Contact}
                        href="mailto:dillionmegida@gmail.com"
                    >
                        <i className="fa fa-envelope"></i>{" "}
                        dillionmegida@gmail.com
                    </a>

                    </span>
                    <span>

                    <a
                        className={Styles.sm}
                        href="https://twitter.com/iamdillion"
                        title="Twitter Profile"
                    >
                        <i className="fa fa-twitter"></i>h
                    </a>
                    <a
                        className={Styles.sm}
                        href="https://github.com/dillionmegida"
                        title="Github Profile"
                    >
                        <i className="fa fa-github"></i>h
                    </a>
                    <a
                        className={Styles.sm}
                        href="https://www.facebook.com/dillion.megida"
                        title="Facebook Profile"
                    >
                        <i className="fa fa-facebook"></i>h
                    </a>
                    <a
                        className={Styles.sm}
                        href="https://www.linkedin.com/in/dillionmegida/"
                        title="LinkedIn Profile"
                    >
                        <i className="fa fa-linkedin"></i>h
                    </a>
                    </span>
                </div>
            </div>
            <div className={Styles.Newsletter}>
                <Newsletter />
            </div>
        </section>
    )
}
