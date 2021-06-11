import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import constants from "../constants"

const BioSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 30px;
  width: 100%;
  background-color: var(--mainColor1);
  padding: 20px 50px;
  position: relative;
  top: -50px;

  & > * {
    position: relative;
    top: 80px;
  }
`

const ProfilePicture = styled.div`
  max-width: 400px;
  border: 10px solid var(--mainColor1);

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`

const Text = styled.div`
max-width: 600px;
  span {
    display: block;
  }
  .name {
    color: #bcc6d3;
    font-size: 40px;
    font-weight: 800;
  }
  .short-bio {
    color: #bcc6d3;
    font-size: 20px;
    margin-top: 5px;
    font-weight: 500;
  }
  .some-text {
    color: #bcc6d3;
    margin-top: 10px;
  }
`

export default function Home() {
  return (
    <Layout>
      <main>
        <BioSection>
          <ProfilePicture>
            <img src={constants.MY_PICTURE} alt="Profile picture" />
          </ProfilePicture>
          <Text>
            <span className="name">Dillion Megida</span>
            <span className="short-bio">
              Software Engineer 👨🏽‍💻 and Content Creator ✨ based in Nigeria.
            </span>
            <span className="some-text">
              I'm passionate about simplifying topics around web development and
              tech using articles and videos.
            </span>
          </Text>
        </BioSection>
        <h1>Hello</h1>
      </main>
    </Layout>
  )
}
