import React from "react"
import Styles from "./index.module.scss"

export default () => (
  <div className={Styles.Newsletter}>
    <iframe
      src="https://dillionmegida.substack.com/embed"
      width="480"
      height="320"
      frameBorder="0"
      scrolling="no"
    />
  </div>
)
