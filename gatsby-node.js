const _ = require("lodash")
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require("gatsby-paginate")

const mdxPostTemplate = path.resolve(
  `./src/components/Blog/PostFull/Mdx.tsx`
)

const FEATURED = [
  "static-relative-absolute-fixed-sticky-positions",
  "why-you-should-cleanup-when-component-unmounts",
  "what-is-a-canonical-link",
  "why-jsx-expressions-must-have-one-parent",
]

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark` || node.internal.type === "Mdx") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages`,
    })

    if (slug === "/now/")
      return createNodeField({
        node,
        name: `slug`,
        value: slug,
      })

    const postPath = slug.replace(/^(\/\d+\.\s)/, "/p/") // replace the number prefix

    createNodeField({
      node,
      name: `slug`,
      value: postPath,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions

  // redirect some paths to homepage
  ;["/me", "/about"].forEach(p => {
    createRedirect({
      fromPath: p,
      toPath: "/",
      isPermanent: true,
    })
  })

  // this article https://www.freecodecamp.org/news/all-caps-in-css-how-to-uppercase-text-with-style/
  // still references the wrong link
  createRedirect({
    fromPath: "/p/10-useful-string-methods-in-javascirpt/",
    toPath: "/p/10-useful-string-methods-in-javascript/",
    isPermanent: true,
  })

  createRedirect({
    fromPath: "/contents",
    toPath: "/content",
    isPermanent: true,
  })

  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/^(/p/)/" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            timeToRead
            frontmatter {
              tags
              title
              date
              pageDescription
            }
          }
        }
      }

      allMdx(
        filter: { fields: { slug: { regex: "/^(/p/)/" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            pageDescription
            tags
            date
          }
          internal {
            contentFilePath
          }
        }
      }

      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }

      allSlides: allSlidesYaml(sort: { fields: date, order: DESC }) {
        edges {
          node {
            path
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        __dirname,
        `./src/components/Blog/PostFull/index.tsx`
      ),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: `${mdxPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  result.data.allSlides.edges.forEach(({ node }) => {
    createPage({
      path: `/talks/${node.path}`,
      component: path.resolve(
        __dirname,
        `./src/components/Talk/TalkFull/index.tsx`
      ),
      context: {
        slug: node.path,
      },
    })
  })

  // pagination doc: https://www.gatsbyjs.com/plugins/gatsby-paginate/

  const featuredArticles = []

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = node.fields.slug.replace("/p/", "").replace("/", "")
    if (FEATURED.includes(slug)) featuredArticles.push({ node })
  })

  console.log(result.data.allMdx.nodes.concat([
    ...result.data.allMarkdownRemark.edges.map(({node}) => node),
  ]))

  createPaginatedPages({
    edges: result.data.allMdx.nodes.concat([
      ...result.data.allMarkdownRemark.edges.map(({node}) => node),
    ]),
    createPage: createPage,
    pageTemplate: path.resolve(__dirname, "./src/components/Blog/index.tsx"),
    pageLength: 10,
    pathPrefix: "blog",
    context: {
      featuredArticles,
    },
  })

  result.data.tagsGroup.group.forEach(tag => {
    createPage({
      path: `tags/${_.kebabCase(tag.fieldValue)}/`,
      component: path.resolve(
        __dirname,
        `./src/components/Blog/Tags/index.tsx`
      ),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
