import { AllPostsGql } from "../../interfaces/Post"
import React from "react"
import Post from "../../components/Blog/PostMini"
import constants from "../../constants"
import { Link } from "gatsby"
import styled from "styled-components"

const Section = styled.section``

type Props = {
  articles: AllPostsGql
}

const { pageLinks } = constants

export default function ArticlesSection({ articles }: Props) {
  const FEATURED = [
    "static-relative-absolute-fixed-sticky-positions",
    "why-you-should-cleanup-when-component-unmounts",
    "what-is-a-canonical-link",
    "why-jsx-expressions-must-have-one-parent",
  ]

  /* @ts-ignore*/
  const featuredArticles = []

  articles.edges.forEach(({ node }) => {
    const slug = node.fields.slug.replace("/p/", "").replace("/", "")
    if (FEATURED.includes(slug)) featuredArticles.push({ node })
  })

  return (
    <Section>
      <h2 className="underline">Articles</h2>
      <div className="grid">
        {/* @ts-ignore*/}
        {featuredArticles.map(
          ({ node: { id, frontmatter, timeToRead, fields, html } }) => (
            <Post
              key={id}
              readTime={timeToRead}
              date={frontmatter.date}
              href={fields.slug}
              title={frontmatter.title}
              content={html}
              tags={frontmatter.tags}
            />
          )
        )}
      </div>
      <Link className="view-all-link a-link" to={`${pageLinks.BLOG}#all-articles`}>
        View all articles
      </Link>
    </Section>
  )
}
