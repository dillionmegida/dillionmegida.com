module.exports = {
  siteMetadata: {
    siteUrl: `https://dillionmegida.com`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.pageDescription,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }

                site {
                    siteMetadata {
                        siteUrl
                    }
                }
              }
            `,
            output: "/rss.xml",
            title: "Dillion Megida's RSS Feed",
          },
        ],
      },
    },

    `gatsby-plugin-sass`,
    `gatsby-plugin-mdx`,

    // For NetlifyCMS
    // `gatsby-plugin-netlify-cms`,

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
        name: `content`,
        path: `${__dirname}/data/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `alone`,
        path: `${__dirname}/data/alone/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/data/articles/`,
      },
    },

    // For disqus - Interaction with users on posts
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `dillionmegida-com`,
      },
    },

    // For transforming markdown content
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-LHRY5D235V"],
        gtagConfig: {
          head: true,
          anonymize_ip: true,
          cookie_expires: 0,
          send_page_view: true,
        },
        pluginConfig: {
          head: false,
          delayOnRouteUpdate: 0,
        },
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
    `gatsby-plugin-client-side-redirect`,
  ],
}
