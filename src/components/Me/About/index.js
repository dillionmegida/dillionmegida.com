import React from "react"
import Styles from "./index.module.css"

export default () => {
    return (
        <section name="about" className={Styles.AboutSection}>
            <section className={Styles.Bio}>
                <h1>About Me</h1>
                <p>
                    I'm passionate about Web Accessibility. I love creating
                    usable tools around the web.
                    <br />
                    <br />
                    I'm also a technical writer with a passion for simplifying
                    topics around the web. I write mostly about web
                    development topics on my blog here,{" "}
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
                    {/* <br />
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
                    <br /> */}
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
                    <img alt="Profile" src="/img/deee.jpeg" />
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
