export interface ContentGql {
  platform: {
    content: {
      title: string
      link: string
    }[]
  }
}

export interface AllContentsQql {
  edges: {
    node: ContentGql
  }[]
}
