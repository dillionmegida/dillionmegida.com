const _ = require("lodash")
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require("gatsby-paginate")

exports.createPages = async ({ graphql, actions, reporter }: any) => {
  const { createPage } = actions
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
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }: any) => {
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

  createPaginatedPages({
    edges: result.data.allMarkdownRemark.edges,
    createPage: createPage,
    pageTemplate: path.resolve(__dirname, "./src/components/Blog/index.tsx"),
    pageLength: 10, // This is optional and defaults to 10 if not used
    pathPrefix: "", // This is optional and defaults to an empty string if not used
    context: {}, // This is optional and defaults to an empty object if not used
  })

  result.data.tagsGroup.group.forEach((tag: any) => {
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

exports.onCreateNode = ({ node, getNode, actions }: any) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
