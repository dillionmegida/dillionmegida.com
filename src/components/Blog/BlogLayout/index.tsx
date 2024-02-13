import React from "react"

import Layout from "../../Layout"
import WithLove from "../WithLove"
import RegexCourseSection from "../../../containers/HomePage/RegexCourseSection"
import { NewTabLink } from "../../AnchorLink"
import constants from "../../../constants"
import styled from "styled-components"

const CoursesText = styled.p`
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  font-size: clamp(1rem, 7vw, 1.3rem);
  text-align: center;
  color: white;

  a {
    transition: background 300ms;
    color: yellow;
    padding: 0 10px;
    background: var(--midMainColor1);
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    position: relative;
    font-size: calc(100% - 2px);

    &:hover {
      background: linear-gradient(
        var(--secondary-color),
        var(--tertiary-color)
      );
      color: black;
    }
  }
`

type Props = {
  children: React.ReactNode
}

const BlogLayout = ({ children }: Props) => {
  return (
    <Layout>
      {children}
      <WithLove />
      <CoursesText>
        <NewTabLink link={constants.deeecode.courses}>
          Check out my courses
        </NewTabLink>
      </CoursesText>
      {/* <RegexCourseSection /> */}
      {/* <Newsletter /> */}
    </Layout>
  )
}

export default BlogLayout
