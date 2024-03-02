import React from "react"

import { Link } from "gatsby"
import constants from "../../constants"
import styled from "styled-components"

const _Header = styled.header`
  background-color: var(--mainColor1);
  position: relative;
  z-index: 1;

  .container {
    border-bottom: 1px solid var(--midMainColor1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    color: white;
    display: flex;
    align-items: center;
    font-size: 25px;
    letter-spacing: 3px;
    color: var(--mainColor2);
    font-family: var(--main-font);
    font-weight: 500;

    .long-text {
      display: none;
    }

    &:hover,
    &.active {
      color: white;
    }

    .picture {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 700px) {
    .container {
      flex-wrap: wrap;
      justify-content: center;
    }

    .name {
      width: max-content;

      .short-text {
        display: none;
      }
    }

    .nav {
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`

const _Link = styled(Link)`
  display: inline-block;
  color: var(--mainColor2);
  font-size: 20px;
  margin: 0 10px;
  padding: 8px 12px;
  width: max-content;
  text-align: center;

  &.active,
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const Header = () => {
  const Links = () => (
    <>
      {[
        // { label: "Dillion", link: constants.pageLinks.HOME },
        { label: "Blog", link: constants.pageLinks.BLOG },
        { label: "Content", link: constants.pageLinks.CONTENT },
        { label: "Talks", link: constants.pageLinks.TALKS },
        { label: "Now", link: constants.pageLinks.NOW },
        // { label: "Regex Course", link: constants.pageLinks.REGEX },
      ].map(l => (
        <_Link key={l.label} to={l.link} activeClassName="active">
          {l.label}
        </_Link>
      ))}
    </>
  )

  return (
    <_Header>
      <div className="container">
        <Link className="name" to="/" activeClassName="active">
          <div className="picture">
            <img src={constants.MY_PICTURE} alt="Profile picture" />
          </div>
          {/* <span className="short-text">DM</span> */}
          {/* <span className="long-text">DILLION MEGIDA</span> */}
        </Link>
        <nav className="nav">
          <Links />
        </nav>
      </div>
    </_Header>
  )
}

export default Header
