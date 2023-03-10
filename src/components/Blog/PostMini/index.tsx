import React from "react"

import { formatBlogDate } from "../../../utils/dates"
import { Link } from "gatsby"
import { Post as IPost } from "../../../interfaces/Post"
import styled from "styled-components"

const PostTemplate = styled.article`
  padding: 20px 0;
  border-bottom: 1px solid var(--midMainColor1);
  margin-bottom: 30px;

  &:hover {
    border-color: var(--mainColor2);
    // background-color: rgba(255, 255, 255, 0.05);
  }

  & h2 {
    color: white;
    margin-bottom: 0;
  }

  .date {
    font-family: var(--sec-font);
    opacity: 0.7;
    font-weight: 500;
    font-size: 18px;
    color: white;
  }

  .excerpt {
    font-size: 20px;
  }

  & p {
    color: white;
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
    font-size: 16px;
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
