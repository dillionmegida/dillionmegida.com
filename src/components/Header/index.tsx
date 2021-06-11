import React from "react"

import { Link } from "gatsby"
import constants from "../../constants"
import styled from "styled-components"

const _Header = styled.header`
  background-color: var(--mainColor1);
  position: relative;
  z-index: 1;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    color: white;
    display: flex;
    align-items: center;
    font-size: 30px;
    letter-spacing: 3px;
    color: var(--mainColor2);

    &:hover,
    &.active {
      color: var(--lightBlue);
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
`

const _Link = styled(Link)`
  display: inline-block;
  color: var(--mainColor2);
  font-size: 16px;
  margin: 0 10px;
  padding: 7px;
  width: 70px;
  text-align: center;

  &.active {
    color: var(--lightBlue);
  }

  &:hover {
    color: var(--lightBlue);
  }
`

const Header = () => {
  const Links = () => (
    <>
      {[
        // { label: "Dillion", link: constants.pageLinks.HOME },
        { label: "Blog", link: constants.pageLinks.BLOG },
        { label: "Contents", link: constants.pageLinks.CONTENTS },
      ].map(l => (
        <_Link to={l.link} activeClassName="active">
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
          DM
        </Link>
        <nav>
          <Links />
        </nav>
      </div>
    </_Header>
  )
}

export default Header
