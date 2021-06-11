import React from "react"
import { Helmet as RHelmet } from "react-helmet"

type Props = {
  pageTitle: string
  pageLink: string
  pageDesc: string
  pageKeywords?: string
  imageCard?: string
  largeTwitterCard?: boolean
  smoothScroll?: boolean
  children?: React.ReactNode
}

const Helmet = ({
  pageTitle,
  pageLink,
  pageDesc,
  pageKeywords = "",
  imageCard = "/img/deee.jpg",
  largeTwitterCard = false,
  smoothScroll = false,
  children = null,
}: Props) => {
  return (
    <RHelmet>
      <html className={smoothScroll ? "smoothScroll" : undefined} lang="en" />
      <title>{pageTitle}</title>
      <link
        rel="canonical"
        href={`https://dillionmegida.com${pageLink}`}
      />{" "}
      {/* edit */}
      <meta name="description" content={pageDesc} /> {/* edit */}
      <meta
        name="keywords"
        content={`Dillion Megida, Dillion, Megida, web accessibility, DevCommunity, Front-end Developer, Technical Writer, Freelancer, Web Developer, Frontend Engineer Web Designer, Software Developer, Nigerian, Developer, portfolio, developer portfolio, ${pageKeywords}`}
      />{" "}
      {/* edit */}
      <meta name="author" content="Dillion Megida" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#130327" />
      <link
        rel="icon"
        href="https://res.cloudinary.com/dillionmegida/image/upload/v1570493725/images/website/favicon.png"
      />
      <meta property="og:image" content={imageCard} />
      <meta
        property="og:url"
        content={`https://dillionmegida.com${pageLink}`}
      />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      {/* This selects the summary card by default but if the LargeTwitterCard props is specified, it users the bigger card
			I implemented bigger cards for articles with covers */}
      {largeTwitterCard ? (
        <meta name="twitter:card" content="summary_large_image" />
      ) : (
        <meta name="twitter:card" content="summary" />
      )}
      <meta name="twitter:site" content="@iamdillion" />
      <meta name="twitter:title" content={pageTitle} /> {/* edit */}
      <meta name="twitter:description" content={pageDesc} /> {/* edit */}
      <meta name="twitter:image" content={imageCard} />
      <meta name="twitter:creator" content="iamdillion" />
      <meta name="referrer" content="origin-when-crossorigin" />
      {/* For fontawesome */}
      <script src="https://use.fontawesome.com/ec33c661f9.js"></script>
      {children}
    </RHelmet>
  )
}

export default Helmet
