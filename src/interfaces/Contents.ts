export interface ContentGql {
  platform: string
  link: string
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
