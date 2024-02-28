import React from "react"

import { formatBlogDate } from "../../../utils/dates"
import { Link } from "gatsby"
import { Post as IPost } from "../../../interfaces/Post"
import styled from "styled-components"

const PostTemplate = styled.article`
  padding: 20px;
  border: 1px solid transparent;
  margin-bottom: 30px;
  background-color: color-mix(in srgb, var(--bgColor) 60%, black);;
  color: #dedcdc;

  &:hover {
    border: 1px solid var(--mainColor2);
    /* border-color: var(--mainColor2); */
    h2 {
      color: var(--mainColor2);
    }
    // background-color: rgba(255, 255, 255, 0.05);
  }

  & h2 {
    color: #dedcdc;
    margin-bottom: 0;
  }

  .date {
    font-family: var(--sec-font);
    opacity: 0.7;
    font-weight: 500;
    font-size: 0.9em;
    color: white;
    margin-bottom: 10px;
  }

  .excerpt {
    font-size: 1.2em;
    line-height: 1.4;
    margin-bottom: 15px;
  }

  & p {
    color: #dedcdc;
  }
`

const TagsSection = styled.p`
  display: flex;
  flex-wrap: wrap;

  .tag {
    border: 1px solid white;
    color: white;
    border-radius: 5px;
    padding: 5px;
    margin: 0 5px;
    font-size: 0.8em;
    opacity: 0.7;
  }
`

const Post = ({ readTime, date, href, title, content, tags }: IPost) => (
  <PostTemplate>
    <Link to={href} title={title}>
      <h2>{title}</h2>
      <p className="date">
        {formatBlogDate(date)} | {readTime} min
        {readTime > 1 && "s"} read
      </p>
      <p className="excerpt">{content}</p>
      {tags ? (
        <TagsSection>
          {tags.map((tag, index) => (
            <span className="tag" key={`${tag}_${index}`}>
              #{tag}
            </span>
          ))}
        </TagsSection>
      ) : null}
    </Link>
  </PostTemplate>
)

export default Post
