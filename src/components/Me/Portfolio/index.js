import React from "react"
import Styles from "./index.module.scss"

import { Link, graphql, useStaticQuery } from "gatsby"
import Template from "./template"

export default () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: { fields: { slug: { regex: "/^(/designs/)/" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            link
                            cover
                            desktop
                        }
                    }
                }
            }
        }
    `)

    const designs = data.allMarkdownRemark.edges

    return (
        <>
            {designs.length > 0 && (
                <section name="portfolio" className={Styles.PortfolioSection}>
                    <h2>Portfolio</h2>
                    <div className={Styles.Gallery}>
                        {designs.map(
                            ({ node: { frontmatter: design } }, i) =>
                                // get only the first two projects
                                i < 2 && (
                                    <Template
                                        key={i}
                                        title={design.title}
                                        cover={design.cover}
                                        link={design.link}
                                        desktop={design.desktop}
                                    />
                                )
                        )}
                    </div>
                    <Link to="/me/portfolio">View all my works ➤</Link>
                </section>
            )}
        </>
    )
}
