import styled from "styled-components"
import React from "react"
import { NewTabLink } from "../components/AnchorLink"
import Helmet from "../components/Helmet"

const Container = styled.div`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  /* background: #1a1a1a;
	background-image: 
		linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
		linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
	background-size: 100px 100px;
	background-position: 0 0, 0 0; */
  &::after {
    content: "";
    position: absolute;
    filter: grayscale(100%) opacity(0.1);
    scale: 1.4;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #e5e5f7;
    opacity: 0.8;
    background: radial-gradient(
        circle,
        transparent 20%,
        #e5e5f7 20%,
        #e5e5f7 80%,
        transparent 80%,
        transparent
      ),
      radial-gradient(
          circle,
          transparent 20%,
          #e5e5f7 20%,
          #e5e5f7 80%,
          transparent 80%,
          transparent
        )
        25px 25px,
      linear-gradient(#444cf7 2px, transparent 2px) 0 -1px,
      linear-gradient(90deg, #444cf7 2px, #e5e5f7 2px) -1px 0;
    background-size: 50px 50px, 50px 50px, 25px 25px, 25px 25px;
  }

  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
    color: white;

    h1 {
      font-size: clamp(1.5rem, 7vw, 3rem);
    }

    a {
      color: yellow;
      text-decoration: none;
      position: relative;
      display: inline;
      background-image: linear-gradient(yellow, yellow);
      background-position: 0 100%;
      background-size: 100% 1px;
      background-repeat: no-repeat;
      transition: background-size 0.3s ease-in-out;
      padding-bottom: 1px;

      &:hover {
        background-size: 0% 1px;
      }
    }
  }

  .cover-image {
    margin: 10px 0;
  }

  p {
    line-height: 1.4;
    margin-bottom: 20px;
  }
`

export default function Videography() {
  return (
    <Container>
      <Helmet
        pageTitle="Free Videography"
        pageLink="/videography"
        pageDesc="I'm offering free videography services for a limited time"
        imageCard="/videography/me-with-camera.png"
      />
      <main>
        <div className="intro">
          <h1>Free Videography</h1>
          <div className="cover-image">
            <img src="/videography/me-with-camera.png" alt="" />
          </div>
          <p>
            I love making videos. I have been doing this{" "}
            <NewTabLink link="https://www.youtube.com/@DillionMegida/videos">
              since 2020 on YouTube
            </NewTabLink>
            . But most of my videos have been educational focused or mostly
            about me recording myself. Here and there, I do podcast type of
            videos with guests, but asides that, I'm usually recording myself,
            explaining something or telling a story.
          </p>
          <p>
            While I still love doing that, I want to take my videography passion
            to the next level. I want to tell stories for people. That could be
            a music video, company video, product video, event highlights, baby
            showers, birthdays, mini documentary, e.t.c. In the future, maybe
            weddings too.
          </p>

          <p>
            I want to build a portfolio of videos that I can show to potential
            clients and also want to gain new experiences. To get there, I need
            your help. I'm offering my videography skills for free. It's a
            win-win. You get a professionally crafted video to share with your
            audience, and I get to add your project to my portfolio.{" "}
            <b>
              The only thing you pay for is my transportation if it's outside
              Amsterdam.
            </b>
          </p>
          <p>
            Just to be clear on this, I am not offering marketing or promotional
            services. I am not making a video for you, and putting on my channel
            to get you views or customers. My goal is to create a great video
            for you, which you can use however you like. I'll also include it in
            my portfolio (and who knows, maybe that brings you extra views!).
          </p>
          <p>
            While I'm not a full-time professional (yet!), I'm committed to
            quality and creativity. I've learnt a lot about making videos, and
            I've been able to test that knowledge on my YouTube. You can see few
            examples like{" "}
            <NewTabLink link="https://youtu.be/ATyrUyDd3Tg?si=fnbNmaYdHtC0xPvg">
              Bicycle Culture in the Netherlands
            </NewTabLink>
            ,{" "}
            <NewTabLink link="https://youtu.be/lhhSiQwtzjk?si=E3MGkvuvT1R6rxkz">
              I beat my friends at Kart Racing
            </NewTabLink>
            ,{" "}
            <NewTabLink link="https://youtu.be/5W6gW6gW6g">
              I improved my social media usage
            </NewTabLink>
            . These are examples where I'm usually telling a story, throwing in
            a few acting, getting nice video shots, and trying out angles I've
            learnt about videography.
          </p>
          <p>
            Recently, I captured a baby shower event and turned that into a
            wholesome video. I can't share that now for confidentiality.
          </p>
          <p>
            So yes, you're still assured of good work as I keep growing, and
            building my portfolio.
          </p>
          <p>
            I'm not sure for how long this free offer would be open. But I hope
            that I can build a client base, such that I can start charging for
            my videography services.
          </p>
          <p>
            If you're interested in this collaboration, please fill the form
            below. I definitely cannot handle everybody's projects, so I'm going
            to make a selection and I'll respond back to you if you are selected
            and we can talk further.
          </p>
          <p>
            <NewTabLink link="https://forms.gle/a8xvwcgPaQ3jaGzTA">
              Fill the form here.
            </NewTabLink>
          </p>
        </div>
      </main>
    </Container>
  )
}
