export interface ContentGql {
  platform: string
  content: {
    title: string
    link: string
  }[]
}

export interface AllContentsQql {
  edges: {
    node: ContentGql
  }[]
}
