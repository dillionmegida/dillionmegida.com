import React from "react"
import Styles from "./ShareArticle.module.css"

import { checkGlobal } from "../../../utils"
import { Share } from "../../UI/Icons"

const checkNativeShare = () => checkGlobal() && navigator.share

const nativeShare = (url, title) => {
  navigator
    .share({
      title,
      url,
      text: `${title} by @iamdillion`,
    })
    .then(() => {
      console.log("Successful shared article.")
    })
    .catch((err) => console.log("Couldn't share article because ", err))
}

const NativeShare = (props) => {
  const url = props.url
  const title = props.title
  return (
    <React.Fragment>
      {checkNativeShare() !== undefined ? (
        <button
          className={Styles.ShareBtn}
          title="Share article via your applications"
          onClick={() => nativeShare(url, title)}
        >
          <Share /> Share
        </button>
      ) : (
        <p style={{ fontSize: "30px", margin: "20px 0" }}>
          <a
            href={`https://twitter.com/intent/tweet?text=${title} by @iamdillion - https://dillionmegida.com${url}`}
          >
            <i style={{ color: "#1DA1F2" }} className="fa fa-twitter"></i>
          </a>
        </p>
      )}
    </React.Fragment>
  )
}

export default NativeShare
