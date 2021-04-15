import React from "react"
import Styles from "./index.module.scss"

import { graphql, useStaticQuery } from "gatsby"
import Template from "./template"

type Project = {
  node: {
    frontmatter: {
      name: string
      link: string
      cover: string
      about: string
    }
  }
}

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/^(/projects/)/" } } }
      ) {
        edges {
          node {
            frontmatter {
              name
              link
              cover
              about
            }
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.edges

  return (
    <>
      {projects.length > 0 && (
        <section id="projects" className={Styles.ProjectSection}>
          <h2>Top Projects</h2>
          <div className={Styles.Gallery}>
            {(projects as Project[]).map(
              ({ node: { frontmatter: project } }, i) =>
                // get only the first two projects
                i < 2 && (
                  <Template
                    key={i}
                    name={project.name}
                    cover={project.cover}
                    link={project.link}
                    about={project.about}
                  />
                )
            )}
          </div>
          <div className={Styles.FindMore}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/dillionmegida"
            >
              Find more projects on GitHub ➤
            </a>
            {/* <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://dillion.netlify.com"
                        >
                            Find some of my web designs here ➤
                        </a> */}
          </div>
        </section>
      )}
    </>
  )
}

export default Projects
