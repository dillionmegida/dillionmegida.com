import React from "react"
import Styles from "./index.module.scss"

import { formatBlogDate } from "../../../utils"
import { Link } from "gatsby"

const Post = (props) => (
  <article className={Styles.PostTemplate}>
    <Link
      to={props.href}
      title={props.title}
      style={{
        fontFamily: "Antic, helvetica",
      }}
    >
      <h2>{props.title}</h2>
      <p className={Styles.Date}>
        {formatBlogDate(props.date)} | {props.readTime} min
        {props.readTime > 1 && "s"} read
      </p>
      <p className={Styles.Excerpt}>{props.content}</p>
      {props.tags ? (
        <p className={Styles.TagsSection}>
          {props.tags.map((tag, index) => (
            <span className={Styles.Tag} key={`${tag}_${index}`}>
              #{tag}
            </span>
          ))}
        </p>
      ) : null}
    </Link>
  </article>
)

export default Post
