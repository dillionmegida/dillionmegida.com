import React from "react"
import Styles from "./index.module.scss"

import { formatBlogDate } from "../../../utils/dates"
import { Link } from "gatsby"
import {Post as IPost} from "../../../interfaces/Post"

const Post = ({ readTime, date, href, title, content, tags }: IPost) => (
  <article className={Styles.PostTemplate}>
    <Link
      to={href}
      title={title}
      style={{
        fontFamily: "Antic, helvetica",
      }}
    >
      <h2>{title}</h2>
      <p className={Styles.Date}>
        {formatBlogDate(date)} | {readTime} min
        {readTime > 1 && "s"} read
      </p>
      <p className={Styles.Excerpt}>{content}</p>
      {tags ? (
        <p className={Styles.TagsSection}>
          {tags.map((tag, index) => (
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
