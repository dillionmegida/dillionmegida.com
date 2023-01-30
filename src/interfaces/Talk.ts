export interface GqlTalk {
  id: string
  title: string
  url: string
  path: string
  cover: string
  tags: string[]
}

export interface AllTalksGql {
  edges: {
    node: GqlTalk
  }[]
}
