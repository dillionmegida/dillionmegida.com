import React from "react"
import Styles from "./index.module.css"

export default () => {
    return (
        <section name="about" className={Styles.AboutSection}>
            <section className={Styles.Bio}>
                <h1>About Me</h1>
                <p>
                    I'm passionate about Web Accessibility and JAMstack
                    applications.
                    <br />
                    <br />I write mostly about front-end web development topics
                    on my blog here,{" "}
                    <a
                        href="https://blog.soshace.com/author/dillionmegida/"
                        title="Soshace Blog"
                    >
                        Soshace
                    </a>{" "}
                    and{" "}
                    <a href="https://dev.to/dillionmegida" title="DEV Blog">
                        Dev.to
                    </a>
                    . I'm also the Founder of{" "}
                    <a
                        href="https://thewebfor5.com"
                        title="The Web For Five Homepage"
                    >
                        TheWebFor5
                    </a>
                    .<br />
                    <br />
                    Proficient in HTML, CSS, JS, ReactJS and GatsbyJS.
                    <br />
                    <br />
                    Efficient use of Adobe Photoshop and Adobe Illustrator for
                    graphics designing. These include photo editing, logo
                    designing and advertisement cards. <br />
                    <br />
                    Average use of Adobe After Effects and Adobe Premiere Pro
                    for video editing and motion graphics.
                    <br />
                    Founder,{" "}
                    <a href="https://twitter.com/deeesignsstudio">
                        Deeesigns Studios
                    </a>
                    , which deals in Graphics Designing.
                    <br />
                    <br />
                    <a
                        className={Styles.Resume}
                        href="/resume.pdf"
                        title="My Resume"
                        target="_blank"
                    >
                        Resume
                    </a>
                </p>
            </section>
            <section className={Styles.Dp}>
                <div className={Styles.ImgDiv}>
                    <img alt='Profile' src="/img/deee.jpeg" />
                </div>
                <p>
                    DILLION MEGIDA{" "}
                    <span role="img" aria-label="Rocket Emoji">
                        &#128640;
                    </span>
                </p>
                {/* <p>
                    <a
                        className={Styles.Contact}
                        href="mailto:dillionmegida@gmail.com"
                    >
                        <i className="fa fa-envelope"></i>{" "}
                        dillionmegida@gmail.com
                    </a>
                    <a className={Styles.Contact} href="tel:+2349058961095">
                        <i className="fa fa-phone"></i> +234 905 896 1095
                    </a>
                    <Link to="/contact" title="Contact Me">
                        Contact Me
                    </Link>
                </p> */}
            </section>
        </section>
    )
}
