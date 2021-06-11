import GitHub from "./components/Icon/GitHub"
import LinkedIn from "./components/Icon/LinkedIn"
import Mail from "./components/Icon/Mail"
import Twitter from "./components/Icon/Twitter"
import YouTube from "./components/Icon/YouTube"

export default {
  SITE_URL: "dillionmegida.com",

  meta: {
    TITLE: "Dillion Megida - Software Engineer and Content Creator ✨",
    DESC:
      "Dillion is a Software Engineer and Content Creator passionate about learning, building, and simplifying topics around tech via articles and videos",
  },

  CURRENT_WORK_NAME: "ThisDot",
  CURRENT_WORK_LINK: "https://labs.thisdot.co",

  RESUME: "https://bit.ly/3tE2eba",

  MY_PICTURE: "/img/deee.jpg",

  social: {
    YouTube: { link: "https://bit.ly/2RMfqfX", Icon: YouTube },
    Twitter: { link: "https://twitter.com/iamdillion", Icon: Twitter },
    GitHub: { link: "https://github.com/dillionmegida", Icon: GitHub },
    LinkedIn: {
      link: "https://www.linkedin.com/in/dillionmegida/",
      Icon: LinkedIn,
    },
    "E-mail": { link: "mailto:dillionmegida@gmail.com", Icon: Mail },
  },

  pageLinks: {
    HOME: "/",
    CONTENTS: "/contents",
    BLOG: "/blog",
  },

  publications: [
    {
      label: "FreeCodeCamp",
      link: "https://www.freecodecamp.org/news/author/dillionmegida/",
    },
    {
      label: "LogRocket",
      link: "https://blog.logrocket.com/author/dillion-megida/",
    },
    {
      label: "Soshace",
      link: "https://blog.soshace.com/author/dillionmegida/",
    },
    {
      label: "Vonage",
      link: "https://learn.vonage.com/authors/dillion-megida/",
    },
  ],
}
