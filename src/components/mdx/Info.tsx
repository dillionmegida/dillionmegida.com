import React from "react"
import styled from "styled-components"

const Block = styled.div`
  font-size: 0.8em;
  border: 2px solid var(--midMainColor2);
  padding: 10px;
  border-radius: 5px;
  background-color: var(--midMainColor1);

  p {
    margin: 0 !important;
  }
`

export default function Info({ children }) {
  return <Block>{children}</Block>
}
