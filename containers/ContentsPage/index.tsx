import React from "react"
import { AllContentsQql } from "../../src/interfaces/Contents"

type Props = {
    contents: AllContentsQql
}

export default function ContentsPage({ contents }: Props) {
  console.log({ contents })
  return (
    <main>
      <h1>All my contents in one place 😎</h1>
    </main>
  )
}
