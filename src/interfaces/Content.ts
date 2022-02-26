export interface ContentGql {
  platform: string
  link: string
  content: {
    title: string
    link: string
    tags?: string[]
  }[]
}

export interface AllContentGql {
  edges: {
    node: ContentGql
  }[]
}
