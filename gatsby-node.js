const _ = require("lodash")
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require("gatsby-paginate")

exports.onCreateNode = ({ node, getNode, actions }) => {
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
  

exports.createPages = async ({ graphql, actions, reporter }) => {
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

  // pagination doc: https://www.gatsbyjs.com/plugins/gatsby-paginate/
  createPaginatedPages({
    edges: result.data.allMarkdownRemark.edges,
    createPage: createPage,
    pageTemplate: path.resolve(__dirname, "./src/components/Blog/index.tsx"),
    pageLength: 10, 
    pathPrefix: "blog",
    context: {},
  })

  result.data.tagsGroup.group.forEach((tag) => {
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