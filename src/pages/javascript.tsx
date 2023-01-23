import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Footer from "../components/Footer"
import Helmet from "../components/Helmet"
import { NewTabLink } from "../components/Link"
import NativeShare from "../components/Blog/ShareArticle"

const Wrapper = styled.div`
  --mainColor1: #171718;
  --mainColor2: #c2bfbf;
  --midMainColor1: #3c3c3c;
`

const Header = styled.header`
  background-color: var(--mainColor1);

  h1 {
    color: var(--javascript);
    text-align: center;
    margin: 20px 0 0;
  }

  .home-link {
    background-color: var(--midMainColor1);
    color: white;
    border-radius: 30px;
    display: block;
    padding: 10px 20px;
    width: max-content;
    margin: 10px auto 30px;
  }

  .cover-image {
    img {
      width: 100%;
      height: 100%;
    }
  }
`

const Main = styled.main`
  background-color: var(--mainColor1);
  color: white;

  h2 {
    color: var(--javascript);
    margin: 40px 0 0;
    font-size: 30px;
  }

  p {
    font-size: 22px;
    margin: 5px 0 20px;
  }

  .a-link {
    font-weight: bold;
    --color: var(--javascript);
    --preColor: var(--javascriptMid);
  }

  .share {
    button {
      color: var(--javascript);
      margin: 0;

      &:is(:hover, :focus) {
        border-color: var(--javascript);
      }
    }
  }
`

type Props = {}

export default function JsCourse() {
  const pageTitle = "JavaScript Simplified for Beginners"
  const pageDesc =
    "Here is a course I'm working on, where I simplify JavaScript in the best way I can. The course will be uploaded on YouTube and will be accessible by everyone for free."

  return (
    <Wrapper>
      <Helmet
        pageTitle={pageTitle}
        pageLink="/javascript"
        pageDesc={pageDesc}
        imageCard='/img/js-course-cover.png'
      />
      <Header>
        <div className="container">
          <h1>JavaScript Simplified for Beginners</h1>
          <Link className="home-link" to="/">
            Go back home
          </Link>
          <div className="cover-image">
            <img src="/img/js-course-cover.png" alt="JavaSCript Course cover" />
          </div>
        </div>
      </Header>
      <Main>
        <div className="container">
          <p>
            Here is a course I'm currently working on. The goal of this course
            is to simplify JavaScript to beginners in the best way I can.
          </p>
          <h2>Why am I making this course?</h2>
          <p>
            To be honest, I never thought of creating a course in 2023. I have
            always been scared of the commitment it requires, and believed I
            didn't have the time for that yet. Not until{" "}
            <NewTabLink className="a-link" link="https://twitter.com/elbasfar10/status/1612432677747175424?s=20&t=z_D__-MZNEXUMcXbfXKviA">
              this conversation on Twitter
            </NewTabLink>
            . Then I thought, "well maybe I can create a course on JavaScript
            🤔".
          </p>
          <p>
            From what began as just as a comment, and an interesting idea, I
            decided to embark on the journey. I made an{" "}
            <NewTabLink
              className="a-link"
              link="https://twitter.com/iamdillion/status/1612766331887026181"
            >
              an announcement on Twitter
            </NewTabLink>{" "}
            on the 10th of January.
          </p>
          <p>
            But why am I making this course? There are two parts to it. Firstly,
            people have asked for it in different ways, but I've just been
            scared. So I stuck to just making videos on different topics without
            any order. And secondly, I believe I'm a good teacher. I'm good at
            simplifying topics related to the web (and even outside) languages
            like HTML, CSS, and JavaScript, and frameworks like React. Here is
            my{" "}
            <NewTabLink
              className="a-link"
              link="https://youtube.com/playlist?list=PLLdz3KlabJv0TBKCbF9aSxIpCxsLiFhEv"
            >
              YouTube playlist on JavaScript
            </NewTabLink>{" "}
            which contains different topics I've simplified in JavaScript.
          </p>
          <p>
            And people love my teaching. I've gotten feedback privately and
            publicly about how my videos simplified one topic or the other for
            different people. Very fulfilling moments sincerely. I collated some
            of those feedback{" "}
            <Link className="a-link" to="/videos-feedback">
              on this page
            </Link>
            .
          </p>
          <p>
            So now I feel motivated to create this course, so that I can have a
            structured set of videos with which people can understand
            JavaScript. I look forward to publishing this course, and the
            fulfilment that will come out of people learning and understanding
            JavaScript on the web through it.
          </p>
          <h2>Topics I'll cover</h2>
          <p>
            I'll be covering topics from "What is JavaScript" to Data Types,
            Variables, Functions, Loops, all the way to APIs, DOM Manipulations,
            Conditional Statements, Operators, Errors and Error Handling,
            Events, Promises and many more. I'll also show you have to use
            JavaScript in your HTML for doing some interactions.
          </p>
          <p>
            Some of these topics will have tasks that you can try out yourself,
            and at the end of the course, there will be simple projects you can
            build to test your knowledge. The code examples I use in the project
            will be publicly available on{" "}
            <NewTabLink
              className="a-link"
              link="https://github.com/dillionmegida"
            >
              my GitHub
            </NewTabLink>{" "}
            so that you can copy and paste and run if you want.
          </p>
          <h2>Where will this course be published?</h2>
          <p>
            This course will be published on my YouTube channel:{" "}
            <NewTabLink
              className="a-link"
              link="https://www.youtube.com/c/deeecode"
            >
              DEEECODE
            </NewTabLink>
            . So if you haven't subscribed yet, do so, so that you will be
            notified when the course is published. The course will be in form of
            a playlist with many videos. Each of these videos will cover
            different topics and some of them could be tasks. This way, it would
            be easy to refer to a topic, instead of having to navigate through a
            2-hour long video.
          </p>
          <h2>When will it be published?</h2>
          <p>
            As for an estimated time when this course will be published, I have
            no idea. And I don't want to make promises 🥲. This is my first time
            making a course. And you know, courses require an outline--a flow
            from a beginning point to an end point. So far, trying to define the
            outline for this course, and put my notes for each topic I want to
            cover, it's like a never ending journey 😂. When my notes are
            complete, then I have to record the videos, then edit, and oh my...I
            can imagine the amount of work that awaits me in the next few
            months.
          </p>
          <p>
            I'm thinking sometime in March, but most likely before April if all
            goes well.
          </p>
          <h2>What do you expect of this course?</h2>
          <p>
            While I'm currently putting my notes together, defining what I want
            to teach, and the examples I want to use, I would also love to know
            what you would like to see in this course.
          </p>
          <p>
            If you would be looking forward to a course like this, as a beginner
            or even mid-level, what would you expect? Here is a Google Form for
            you to share your suggestions:{" "}
            <NewTabLink
              className="a-link"
              link="https://forms.gle/MCiXcB4kUmxnPcAA7"
            >
              forms.gle/MCiXcB4kUmxnPcAA7
            </NewTabLink>
          </p>
          <p>
            You can share topics you would like to see explained, or an idea of
            how I should go about the course. For example, someone shared that I
            make the code examples publicly available so that they can try it.
            And now, I've make a GitHub repository (private for now) where I
            will store those examples for each topic. Another person mentioned
            having good diagrams, and now I have Figma opened to do some
            illustrations that could aid understanding some topics. So, I would
            love to hear from you also, that I may better serve you 💜
          </p>
          <p className="share">
            If you trust my teaching, and/or are looking forward to this course,
            I'll also appreciate if you could{" "}
            <NativeShare
              url="/javascript"
              title="JavaScript Simplified for Beginners Course"
            />{" "}
            this with others who may find it helpful.
          </p>
        </div>
      </Main>
      <Footer />
    </Wrapper>
  )
}
