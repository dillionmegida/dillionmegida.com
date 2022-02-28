import { AllPostsGql } from "../../interfaces/Post"
import React from "react"
import Post from "../../components/Blog/PostMini"
import constants from "../../constants"
import { Link } from "gatsby"
import styled from "styled-components"
import { FormattedMessage } from "react-intl"

const Section = styled.section``

type Props = {
  articles: AllPostsGql
}

const { pageLinks } = constants

export default function ArticlesSection({ articles }: Props) {
  console.log({ articles })
  return (
    <Section>
      <h2 className="underline">
        <FormattedMessage id="articles" />
      </h2>
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
        <FormattedMessage id="view all articles" />
      </Link>
    </Section>
  )
}
