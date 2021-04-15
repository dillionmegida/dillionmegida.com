import React from "react"
import Styles from "./index.module.scss"

const WithLove = () => (
  <p className={Styles.p}>
    Articles written with{" "}
    <span className={Styles.Emoji} role="img">
      {" "}
      &#10084;{" "}
    </span>
    by
    <br />
    <a href="http://twitter.com/iamdillion" title="Dillion Megida">
      Dillion Megida
    </a>
  </p>
)

export default WithLove
