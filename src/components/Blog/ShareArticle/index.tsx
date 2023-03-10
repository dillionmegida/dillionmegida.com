import React from "react"

import { checkGlobal } from "../../../utils/dates"
import { Share } from "../../UI/Icons"
import styled from "styled-components"

const ShareBtn = styled.button`
  background: none;
  border: none;
  background-color: var(--mainColor1);
  color: var(--mainColor2);
  padding: 10px;
  cursor: pointer;
  margin: 15px 0;
  font-size: 20px;
  border: 1px solid transparent;

  &:hover,
  &:focus {
    border-color: var(--mainColor2);
  }
`

const checkNativeShare = () => checkGlobal() && navigator.share

const nativeShare = (url: string, title: string) => {
  navigator
    .share({
      title,
      url,
      text: `${title} by @iamdillion`,
    })
    .then(() => {
      console.log("Successful shared article.")
    })
    .catch(err => console.log("Couldn't share article because ", err))
}

type Props = {
  url: string
  title: string
}

const NativeShare = ({ url, title }: Props) => {
  return (
    <React.Fragment>
      {checkNativeShare() !== undefined ? (
        <ShareBtn
          title="Share article via your applications"
          onClick={() => nativeShare(url, title)}
        >
          <Share /> Share
        </ShareBtn>
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
