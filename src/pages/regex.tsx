import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Footer from "../components/Footer"
import Helmet from "../components/Helmet"
import { NewTabLink } from "../components/Link"
import NativeShare from "../components/Blog/ShareArticle"

const Wrapper = styled.div`
  --mainColor1: #01333a;
  --mainColor2: #c2bfbf;
  --midMainColor1: #3c3c3c;
`

const Header = styled.header`
  background-color: var(--mainColor1);

  h1 {
    color: var(--regex);
    text-align: center;
    margin: 20px 0 0;
  }

  .home-link {
    background-color: black;
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
    color: var(--regex);
    margin: 40px 0 0;
    font-size: 30px;
  }

  p {
    font-size: 22px;
    margin: 5px 0 20px;
  }

  ul {
    list-style-type: square;
  }

  blockquote {
    margin-left: 0;
    padding-left: 20px;
    border: 1px solid var(--regexMid);
    font-size: 30px;
    width: 100%;
    max-width: 560px;
  }

  .a-link {
    font-weight: bold;
    --color: var(--regex);
    --preColor: var(--regexMid);
  }

  .share {
    button {
      color: var(--regex);
      margin: 0;

      &:is(:hover, :focus) {
        border-color: var(--regex);
      }
    }
  }
`

type Props = {}

export default function JsCourse() {
  const pageTitle = "Regular Expressions Simplified"
  const pageDesc =
    "Here is a course I'm working on, where I simplify Regular Expressions in the best way I can. The course will be uploaded on YouTube and will be accessible by everyone for free."

  return (
    <Wrapper>
      <Helmet
        pageTitle={pageTitle}
        pageLink="/regex"
        pageDesc={pageDesc}
        imageCard="/img/regex-course-cover.png"
      />
      <Header>
        <div className="container">
          <h1>{pageTitle}</h1>
          <Link className="home-link" to="/">
            Go back home
          </Link>
          <div className="cover-image">
            <img
              src="/img/regex-course-cover.png"
              alt="Regular Expressions Course cover"
            />
          </div>
        </div>
      </Header>
      <Main>
        <div className="container">
          <p>
            I'm taking a pause on my{" "}
            <Link className="a-link" to="/javascript">
              JavaScript course
            </Link>{" "}
            which I announced earlier, to focus on this course I'm currently
            working on. I decided to take that pause because while planning for
            both courses, I was able to decide on an outline for this one
            quicker, so I thought to complete this first, before continuing with
            the JavaScript one.
            <br />
            <br />
            So do not worry, the JavaScript course will still be published in
            few months 😇
          </p>
          <h2>Why am I making this course?</h2>
          <p>
            The goal of this course is to simplify Regular Expressions to
            beginners and intermediates in the best way I can. The contents of
            this course can be applied to not just JavaScript, but other
            programming languages that support regular expressions.
            <br />
            <br />
            Regular expressions is a concept I've struggled with a lot in my
            programming journey. And when I think I finally understand it, I
            come across a challenge that makes me realize{" "}
            <i>"I still don't know this yet 😕"</i>
            <br />
            <br />
            And I know I'm not the only one on this boat. So I took some time to
            learn and master regular expressions, and thought to also make it a
            course, simplified for others to learn. I made{" "}
            <NewTabLink
              link="https://twitter.com/iamdillion/status/1628124767428481044?s=20"
              className="a-link"
            >
              an announcement on Twitter
            </NewTabLink>{" "}
            for this course.
            <br />
            <br />I believe I'm good at simplifying topics, so I'm leveraging
            this skill to demystify Regular expressions 🚀
          </p>

          <h2>Topics I'll cover</h2>
          <p>
            I'll be covering a lot of topics including:
            <ul>
              <li>Quantifiers</li>
              <li>Character Classes</li>
              <li>Capturing Groups</li>
              <li>Lookarounds</li>
              <li>Alternations</li>
              <li>and so much more</li>
            </ul>
          </p>
          <p>
            Some of these topics will have tasks that you can try out yourself,
            because:
            <blockquote>You learn better when you practice 😉</blockquote>
          </p>
          <p>
            We will also solve some Stackoverflow questions related to Regular
            expressions
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
            different topics including tasks. This way, it would be easy to
            refer to a topic, instead of having to navigate through a 2-hour
            long video.
          </p>
          <h2>When will it be published?</h2>
          <p>
            I cannot give a fixed time, but a flexible time is before the end of
            April. I'm currently{" "}
            <Link
              to="https://twitter.com/iamdillion/status/1632453623807369218?s=20"
              className="a-link"
            >
              wrapping up the outline and examples
            </Link>{" "}
            and I should be done with this in two to three weeks. Then I can
            start recording, then editing, then <b>PUBLISHING 🤩</b>
          </p>
          <p>
            If you would be looking forward to a course like this, as a beginner
            or even mid-level, what would you expect? Here is a Google Form for
            you to share your suggestions:{" "}
            <NewTabLink
              className="a-link"
              link="https://forms.gle/MiWMCw7wsFHMoDDK7"
            >
              forms.gle/MiWMCw7wsFHMoDDK7
            </NewTabLink>
          </p>
          <p>
            You can share topics you would like to see explained, or any idea of
            how I should go about the course. I would love to hear from you,
            that I may better serve you 💜
          </p>
          <p className="share">
            If you trust my teaching, and/or are looking forward to this course,
            I'll also appreciate if you could{" "}
            <NativeShare
              url="/regex"
              title="Regular Expressions Simplified Course"
            />{" "}
            this with others who may find it helpful.
          </p>
        </div>
      </Main>
      <Footer />
    </Wrapper>
  )
}
