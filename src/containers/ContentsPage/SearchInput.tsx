import React from "react"
import styled from "styled-components"

const Container = styled.div`
  .tags-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    .tag-btn {
      background: none;
      border: none;
      margin-right: 10px;
      color: var(--lightBlue);
      text-decoration: underline;
      cursor: pointer;
      padding: 5px;
      border: 1px solid transparent;
      &.active {
        border-color: var(--mainColor1);
        text-decoration: none;
      }
    }
  }
  .input-container {
    input {
      padding: 20px;
      width: 100%;
      border: 1px solid var(--mainColor1);
      border-radius: 5px;
    }
  }
`

type Props = {
  onQuery: (val: string) => void
  onClickTag: (val: string) => void
  commonTags: string[]
  activeTag: string
  defaultValue?: string
}

export default function SearchInput({
  onQuery,
  onClickTag,
  commonTags,
  activeTag,
  defaultValue,
}: Props) {
  return (
    <Container>
      <div className="tags-container">
        {commonTags.map((tag, i) => (
          <button
            onClick={() => onClickTag(tag)}
            className={"tag-btn " + (activeTag === tag ? "active" : "")}
            key={tag + "-" + i}
          >
            #{tag}
          </button>
        ))}
      </div>
      <div className="input-container">
        <input
          autoFocus
          type="text"
          placeholder="Search my contents"
          onChange={e => onQuery(e.target.value)}
          defaultValue={defaultValue}
        />
      </div>
    </Container>
  )
}
