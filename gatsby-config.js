module.exports = {
  siteMetadata: {
    siteUrl: `https://dillionmegida.com`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,

    `gatsby-plugin-sass`,

    // For NetlifyCMS
    `gatsby-plugin-netlify-cms`,

    // Automatic sitemaps when built
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/tags/*", "/search", "/projects/*"],
      },
    },

    // React Helmet for populating thehead tag
    `gatsby-plugin-react-helmet`,

    // for parsing YAML files
    `gatsby-transformer-yaml`,

    // For handling file sources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/data/contents/`,
      },
    },

    // For disqus - Interaction with users on posts
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `dillionmegida-com`,
      },
    },

    // For transforming markdown contents
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-text-highlighter`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          `gatsby-remark-liquid-tags`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHightlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },

    // For google analytics
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: "UA-148541646-2",
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },

    // For gatsby manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dillion Megida`,
        short_name: `Dillion Megida`,
        start_url: `/`,
        background_color: `#130327`,
        theme_color: `#130327`,
        display: `standalone`,
        icon: `static/img/icon.png`,
      },
    },

    // Gatsby offline
    `gatsby-plugin-offline`,
  ],
}
