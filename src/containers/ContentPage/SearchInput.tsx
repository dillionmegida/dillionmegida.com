import React from "react"
import styled from "styled-components"
import { capitalize } from "../../utils/string"

const Container = styled.div`
  .tags-container,
  .types-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    .set-btn {
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
  defaultValue?: string

  commonTags: string[]
  activeTag: string
  onClickTag: (val: string) => void

  contentTypes: string[]
  activeType: string
  onClickType: (val: string) => void
}

export default function SearchInput({
  onQuery,
  commonTags,
  activeTag,
  onClickTag,
  contentTypes,
  activeType,
  onClickType,
  defaultValue,
}: Props) {
  return (
    <Container>
      <div className="tags-container">
        {commonTags.map((tag, i) => (
          <button
            onClick={() => onClickTag(tag)}
            className={"set-btn " + (activeTag === tag ? "active" : "")}
            key={tag + "-" + i}
          >
            #{tag}
          </button>
        ))}
      </div>
      <div className="types-container">
        {contentTypes.map((type, i) => (
          <button
            onClick={() => onClickType(type)}
            className={"set-btn " + (activeType === type ? "active" : "")}
            key={type + "-" + i}
          >
            {capitalize(type)}
          </button>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search my content"
          onChange={e => onQuery(e.target.value)}
          defaultValue={defaultValue}
        />
      </div>
    </Container>
  )
}
