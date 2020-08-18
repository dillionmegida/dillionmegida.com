import React from "react"
import Styles from "./index.module.css"

export default () => {
    return (
        <section name="about" className={Styles.AboutSection}>
            <section className={Styles.Bio}>
                <h1>About Me</h1>
                <p>
                    Passionate about Web Accessibility and Web Technologies.
                    Skilled in transforming UI/UX designs to readable codes. I
                    develop web applications and tools with JavaScript.
                    <br />
                    <br />
                    Passionate Technical writer who loves simplifying topics
                    around the web. I write mostly about web development topics
                    on my blog here,{" "}
                    <a
                        href="https://www.freecodecamp.org/news/author/dillionmegida/"
                        title="FreeCodeCamp Profile"
                    >
                        FreeCodeCamp
                    </a>
                    ,{" "}
                    <a
                        href="https://blog.logrocket.com/author/dillion-megida/"
                        title="LogRocket Profile"
                    >
                        LogRocket
                    </a>
                    ,{" "}
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
                    .<br />
                    <br />
                    Founder,{" "}
                    <a
                        href="https://thewebfor5.com"
                        title="The Web For Five Homepage"
                    >
                        TheWebFor5
                    </a>
                    .
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
                    <br />
                    <p>
                        <b>Skills:</b> JavaScript, SASS, React, Gatsby, Angular,
                        Node.js
                    </p>
                </p>
                <a
                    className={Styles.Resume}
                    href="https://drive.google.com/file/d/1-8Kad9uT65zPoxKU5cMZc9ju5pJKK7iD/view?usp=sharing"
                    title="My Resume"
                    target="_blank"
                >
                    Resume
                </a>
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
