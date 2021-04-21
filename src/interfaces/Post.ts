export interface GqlPost {
  frontmatter: {
    pageDescription: string
    title: string
    tags?: string[]
    date: Date
  }
  timeToRead: number
  fields: {
    slug: string
  }
}

export interface AllPostsGql {
  edges: {
    node: GqlPost
  }[]
}

export interface Post {
  readTime: number
  date: Date
  href: string
  title: string
  content: string
  tags?: string[]
}

export interface GqlPostFull {
  id: string
  frontmatter: {
    pageDescription: string
    title: string
    tags?: string[]
    date: Date
    monetize: boolean
    pageKeywords: string
    cover: string
    questions: any
  }
  timeToRead: number
  html: string
  fields: {
    slug: string
  }
  fileAbsolutePath?: string
}
