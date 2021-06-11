import { AllPostsGql } from "../../interfaces/Post"
import React from "react"
import Post from "../../components/Blog/PostMini"
import constants from "../../constants"
import { Link } from "gatsby"
import styled from "styled-components"

const Section = styled.section`
  background-color: white;
`

type Props = {
  articles: AllPostsGql
}

const { pageLinks } = constants

export default function ArticlesSection({ articles }: Props) {
  return (
    <Section>
      <h2>Articles</h2>
      <div className="grid">
        {articles.edges.map(
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
      <Link className="view-all-link" to={pageLinks.BLOG}>
        View all articles
      </Link>
    </Section>
  )
}
