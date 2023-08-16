// import styled from "styled-components"
// import React from "react"
// import constants from "../../constants"
// import { Link } from "gatsby"
// import { NewTabLink } from "../../components/Link"
// import { AllContentGql } from "../../interfaces/Content"
// import { AllPostsGql } from "../../interfaces/Post"
// import ArticlesSection from "./ArticlesSection"
// import YoutubeSection from "./YoutubeSection"
// import STWBlock from "./STWBlock"
// import RegexCourseSection from "./RegexCourseSection"

// const { publications, pageLinks, social, RESUME } = constants
// const pubsLength = publications.length

// const Main = styled.main``

// const BioSection = styled.div`
//   width: 100%;
//   background-color: var(--mainColor1);
//   position: relative;
//   top: -80px;
//   padding-bottom: 50px;

//   .container {
//     display: grid;
//     --columns: auto 1fr;
//     grid-template-columns: var(--columns);
//     grid-gap: 30px;

//     @media (max-width: 650px) {
//       --columns: 1fr;
//     }

//     & > * {
//       position: relative;
//       top: 110px;
//     }

//     .work-link {
//       color: var(--mainColor2);
//     }
//   }
// `

// const ProfilePicture = styled.div`
//   max-width: 400px;
//   border: 10px solid var(--mainColor1);
//   left: -10px;
//   width: 100%;
//   position: relative;
//   z-index: 1;

//   &::before {
//     content: "";
//     width: 110%;
//     height: 100%;
//     background-color: rgba(255, 255, 255, 0.15);
//     position: absolute;
//     left: -50px;
//     z-index: -1;
//     top: -20px;
//   }

//   @media (max-width: 800px) {
//     max-width: 250px;
//   }

//   @media (max-width: 650px) {
//     max-width: 100%;
//     order: 2;
//   }

//   img {
//     width: 100%;
//     object-fit: cover;
//     height: 100%;
//   }
// `

// const Text = styled.div`
//   max-width: 600px;
//   span {
//     display: block;
//   }
//   .name {
//     color: white;
//     font-size: 40px;
//     font-weight: 800;
//     margin: 0;
//   }
//   .short-bio {
//     color: white;
//     margin: 20px 0;
//     font-size: 22px;
//     font-weight: 500;
//   }
//   .some-text {
//     font-size: 20px;
//     color: white;
//     margin-top: 10px;
//     line-height: 2;

//     .video-link {
//       display: inline-block;
//       &.a-link::after {
//         bottom: 5px;
//       }
//     }

//     .resume {
//       a {
//         font-weight: 500;

//         @media (max-width: 650px) {
//           color: white;
//           font-size: 20px;
//         }
//       }
//     }
//   }
// `

// const BodySection = styled.div`
//   section {
//     margin-bottom: 80px;
//     > h2 {
//       font-size: 30px;
//       position: relative;
//       overflow: hidden;
//       color: var(--mainColor2);
//       &.underline::after {
//         content: "";
//         position: absolute;
//         top: 25px;
//         left: 150px;
//         border-top: 1px solid var(--mainColor2);
//         width: 100%;
//       }
//     }

//     .grid {
//       display: grid;
//       --columns: 2;
//       grid-template-columns: repeat(var(--columns), 1fr);
//       grid-column-gap: 60px;

//       @media (max-width: 650px) {
//         --columns: 1;
//       }
//     }

//     .view-all-link {
//       color: var(--mainColor2);
//       font-size: 20px;
//       display: block;
//       margin-top: 20px;
//       font-weight: 500;
//       position: relative;
//       width: max-content;
//     }
//   }
// `

// type Props = {
//   content: {
//     youtube: AllContentGql
//     deeecode: AllContentGql
//     allArticlesOnMyWebite: AllPostsGql
//   }
// }

// export default function HomePage({ content }: Props) {
//   const { allArticlesOnMyWebite, youtube, deeecode } = content

//   const { CURRENT_WORK_LINK, CURRENT_WORK_NAME } = constants

//   return (
//     <Main>
//       <RegexCourseSection />
//       <BioSection>
//         <div className="container">
//           <ProfilePicture>
//             <img src={constants.MY_PICTURE} alt="Profile picture" />
//           </ProfilePicture>
//           <Text>
//             <h1 className="name">Dillion Megida</h1>
//             <span className="short-bio">
//               Developer 🥑{" "}
//               {CURRENT_WORK_NAME && CURRENT_WORK_LINK ? (
//                 <>
//                   {" "}
//                   at{" "}
//                   <NewTabLink
//                     className="work-link a-link"
//                     link={CURRENT_WORK_LINK}
//                   >
//                     {CURRENT_WORK_NAME}
//                   </NewTabLink>
//                 </>
//               ) : null}{" "}
//               and Content Creator ✨
//             </span>
//             <span className="some-text">
//               I'm a Content Creator passionate about simplifying topics around
//               tech/web/programming via videos and articles. I also love sharing
//               my experiences with life and career as I believe they can help
//               someone out there.
//               <br />
//               <br />
//               As a Software Engineer familiar with backend technologies, I focus
//               majorly on the frontend side of applications, with professional
//               experience in React (and its frameworks) and basic experience with
//               Angular and Vue. I also love building accessible applications, and
//               playing with CSS.
//               <br />
//               <br />I write mostly on{" "}
//               <Link to={pageLinks.BLOG} className="a-link">
//                 my blog here
//               </Link>
//               {publications.map((p, i) =>
//                 i === pubsLength - 1 ? (
//                   <React.Fragment key={`publication-${i}`}>
//                     {" "}
//                     and{" "}
//                     <a className="a-link" key={`link${i}`} href={p.link}>
//                       {p.label}
//                     </a>
//                   </React.Fragment>
//                 ) : (
//                   <React.Fragment key={`publication-${i}`}>
//                     ,{" "}
//                     <a className="a-link" key={`link${i}`} href={p.link}>
//                       {p.label}
//                     </a>
//                   </React.Fragment>
//                 )
//               )}{" "}
//               <br />
//               <br />I also create Career/Life video content on{" "}
//               <NewTabLink
//                 className="video-link a-link"
//                 link={social.YouTube.link}
//               >
//                 my YouTube Channel
//               </NewTabLink>{" "}
//               and Tech video content on{" "}
//               <NewTabLink
//                 className="video-link a-link"
//                 link={social.DeeeCode.link}
//               >
//                 my DeeeCode Channel
//               </NewTabLink>
//               <br />
//               <br />
//               {/* Co-founder,{" "}
//               <NewTabLink link="http://skulmart.com/">SkulMart</NewTabLink> */}
//               <br />
//               <br />
//               <span className="resume">
//                 <NewTabLink className="a-link" link={RESUME}>
//                   Resume
//                 </NewTabLink>
//               </span>
//             </span>
//           </Text>
//         </div>
//       </BioSection>
//       <BodySection className="body">
//         <div className="container">
//           <STWBlock />
//           <ArticlesSection articles={allArticlesOnMyWebite} />
//           <YoutubeSection deeecode={deeecode} youtube={youtube} />
//           {/* <Newsletter /> */}
//         </div>
//       </BodySection>
//     </Main>
//   )
// }

import React from "react"
import styled from "styled-components"
import { NewTabLink } from "../../components/AnchorLink"
import constants from "../../constants"
import YouTube from "../../components/Icon/YouTube"
import LinkIcon from "../../components/Icon/Link"
import TikTok from "../../components/Icon/TikTok"
import Twitter from "../../components/Icon/Twitter"
import LinkedIn from "../../components/Icon/LinkedIn"
import { Link } from "gatsby"
import YoutubeSection from "./YoutubeSection"
import RegexCourseSection from "./RegexCourseSection"

const Main = styled.main`
  padding: calc(100vh / 10) 20px 150px;
  color: white;
  position: relative;
  width: 100%;
  isolation: isolate;
  font-size: 20px;
  min-height: 100vh;
  overflow: hidden;
  margin: 0;
  background-color: var(--bgColor);

  .container {
    max-width: 900px;
    margin: 0 auto;
  }

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

  .landing {
    padding: 0 40px 100px;
    background: linear-gradient(
      var(--mainColor1),
      var(--mainColor1),
      transparent
    );
    height: max-content;

    .top-heading {
      width: 100%;
      display: flex;
      margin-bottom: 40px;
      padding: 20px 0;
    }

    .body {
      display: flex;
      gap: 60px;
      max-width: 800px;

      @media (max-width: 800px) {
        flex-wrap: wrap;
      }
    }

    .image {
      width: 150px;
      height: 200px;
      position: relative;
      margin-top: -50px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        border: 2px solid var(--mainColor1);
      }

      .main {
        filter: grayscale(100%);
        position: relative;
        transition: filter 300ms;

        &:hover {
          filter: none;
        }
      }

      .second {
        scale: 1.1;
        position: absolute;
        top: 20px;
        opacity: 0.1;
        filter: grayscale(100%);
        left: -14px;
      }
    }
  }

  .link-highlight {
    transition: background 300ms;
    color: yellow;
    padding: 0 6px;
    margin: 0 6px;
    height: 30px;
    background: var(--midMainColor1);
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    position: relative;
    top: 3px;

    &:hover {
      background: linear-gradient(
        var(--secondary-color),
        var(--tertiary-color)
      );
      color: black;
    }
  }

  p,
  a {
    font-family: var(--sec-font);
    font-weight: 500;
    font-size: 20px;
  }

  .text {
    width: 100%;
    .title {
      font-size: 25px;
      position: relative;
      margin-bottom: 50px;
      line-height: 35px;

      &::after {
        width: 80px;
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        height: 2px;
        background: linear-gradient(#f0de14, #65fcb0);
      }
    }

    .highlight {
      background: linear-gradient(#f0de14, #65fcb0);
      font-weight: 800;
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
    }

    h1 {
      background: linear-gradient(#f0de14, #65fcb0);
      font-weight: 800;
      font-size: 40px;
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
    }

    .bio {
      /* max-width: 500px; */

      p {
        margin-bottom: 30px;
        line-height: 30px;
      }
    }

    @media (max-width: 800px) {
      h1 {
        font-size: 35px;
      }

      .title {
        font-size: 20px;
      }
    }

    .more-links {
      font-size: 25px;
      position: relative;
      margin-top: 70px;
      max-width: 600px;

      &::before {
        width: 80px;
        content: "";
        position: absolute;
        top: -10px;
        left: 0;
        height: 2px;
        background: linear-gradient(#f0de14, #65fcb0);
      }
    }
  }
`

type Props = {
  content: any
}

export default function HomePage({ content }: Props) {
  const { allArticlesOnMyWebite, youtube, deeecode } = content

  return (
    <Main>
      <div className="landing container">
        <div className="body">
          <div className="image">
            <img
              className="second"
              src={constants.MY_PICTURE}
              alt="Dillion Megida"
            />
            <img
              className="main"
              src={constants.MY_PICTURE}
              alt="Dillion Megida"
            />
          </div>
          <div className="text">
            <div className="top-heading">
              <Link className="link-highlight" to="/blog">
                <LinkIcon color="#fff" /> /blog
              </Link>
              <Link className="link-highlight" to="/content">
                <LinkIcon color="#fff" /> /content
              </Link>
              <Link className="link-highlight" to="/talks">
                <LinkIcon color="#fff" /> /talks
              </Link>
            </div>
            <h1 className="">Dillion Megida</h1>
            <p className="title">
              Software Engineer,{" "}
              <span className="highlight ">Content Creator</span>,
              <br />
              <span>Developer Advocate</span>
            </p>
            <div className="bio">
              <p>
                I love to <span className="highlight">TEACH</span> and{" "}
                <span className="highlight">SIMPLIFY</span> technical concepts.
                I love to{" "}
                <span className="highlight">create videos & articles</span>. I
                also love to <span className="highlight">SHARE</span> my
                knowledge and experiences on different topics 😇
              </p>
              <p>
                I simplify Web Development on{" "}
                <NewTabLink
                  className="link-highlight"
                  link={constants.deeecode.yt}
                >
                  <YouTube color="#FF0000" />
                  deeecode
                </NewTabLink>{" "}
              </p>
              <p>
                I share lessons from my Career and Life in the Netherlands on{" "}
                <NewTabLink
                  className="link-highlight"
                  link={constants.social.YouTube.link}
                >
                  <YouTube color="#FF0000" /> dillionmegida
                </NewTabLink>
              </p>
              <p>
                And you can find my coding courses on
                <NewTabLink
                  className="link-highlight"
                  link={constants.deeecode.courses}
                >
                  <LinkIcon color="#FF0000" /> deeecode.com/courses
                </NewTabLink>
              </p>
              <div className="more-links">
                <p>
                  Other useful links:
                  <NewTabLink
                    className="link-highlight"
                    link={constants.social.Twitter.link}
                  >
                    <Twitter /> iamdillion
                  </NewTabLink>
                  <NewTabLink
                    className="link-highlight"
                    link={constants.social.TikTok.link}
                  >
                    <TikTok /> iamdillion
                  </NewTabLink>
                  <NewTabLink
                    className="link-highlight"
                    link={constants.social.LinkedIn.link}
                  >
                    <LinkedIn /> Dillion Megida
                  </NewTabLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <YoutubeSection deeecode={deeecode} youtube={youtube} />
      <RegexCourseSection />
    </Main>
  )
}
