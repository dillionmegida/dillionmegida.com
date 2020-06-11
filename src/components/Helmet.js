import React from "react"
import { Helmet } from "react-helmet"

import PropTypes from "prop-types"

const AppHelmet = ({
    PageTitle,
    PageLink,
    PageDescription,
    PageKeywords,
    ImageCard = "https://res.cloudinary.com/dillionmegida/image/upload/v1584753510/images/website/deee_iufaho.jpg",
    LargeTwitterCard = false,
    ...props
}) => {
    // defaults
    const d = {
        PageTitle,
        PageLink,
        PageDescription,
        PageKeywords,
        ImageCard,
        LargeTwitterCard,
    }

    return (
        <Helmet>
            <html
                className={props.smoothScroll ? "smoothScroll" : null}
                lang="en"
            />
            <title>{d.PageTitle}</title>
            <link
                rel="canonical"
                href={`https://dillionmegida.com${d.PageLink}`}
            />{" "}
            {/* edit */}
            <meta name="description" content={d.PageDescription} /> {/* edit */}
            <meta
                name="keywords"
                content={`Dillion Megida, Dillion, Megida, web accessibility, DevCommunity, Front-end Developer, Technical Writer, Freelancer, Web Developer, Frontend Engineer Web Designer, Software Developer, Nigerian, Developer, portfolio, developer portfolio, ${
                    d.PageKeywords ? d.PageKeywords : ""
                }`}
            />{" "}
            {/* edit */}
            <meta name="author" content="Dillion Megida" />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#130327" />
            <link
                rel="icon"
                href="https://res.cloudinary.com/dillionmegida/image/upload/v1570493725/images/website/favicon.png"
            />
            <meta property="og:image" content={d.ImageCard} />
            <meta
                property="og:url"
                content={`https://dillionmegida.com${d.PageLink}`}
            />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={d.PageTitle} />
            <meta property="og:description" content={d.PageDescription} />
            {/* This selects the summary card by default but if the LargeTwitterCard props is specified, it users the bigger card
			I implemented bigger cards for articles with covers */}
            {d.LargeTwitterCard ? (
                <meta name="twitter:card" content="summary_large_image" />
            ) : (
                <meta name="twitter:card" content="summary" />
            )}
            <meta name="twitter:site" content="@iamdillion" />
            <meta name="twitter:title" content={d.PageTitle} /> {/* edit */}
            <meta name="twitter:description" content={d.PageDescription} />{" "}
            {/* edit */}
            <meta name="twitter:image" content={d.ImageCard} />
            <meta name="twitter:creator" content="iamdillion" />
            <meta name="referrer" content="origin-when-crossorigin" />
            {/* For fontawesome */}
            <script src="https://use.fontawesome.com/ec33c661f9.js"></script>
        </Helmet>
    )
}

AppHelmet.proptype = {
    PageTitle: PropTypes.string.isRequired,
    PageLink: PropTypes.string.isRequired,
    PageDescription: PropTypes.string.isRequired,
    PageKeywords: PropTypes.string,
    ImageCard: PropTypes.string,
    LargeTwitterCard: PropTypes.bool,
}

export default AppHelmet
