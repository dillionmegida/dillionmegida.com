import React from "react"
import Styles from "./index.module.css"

import { Link, graphql, useStaticQuery } from "gatsby"

export default () => {
    const data = useStaticQuery(graphql`
        query {
            allWebDesigns: allFile(
                filter: { sourceInstanceName: { eq: "web-design" } }
            ) {
                edges {
                    node {
                        childMarkdownRemark {
                            frontmatter {
                                title
                            }
                        }
                    }
                }
            }
        }
    `)

    const designs = data.allWebDesigns.edges

    return (
        <>
            {designs.length > 0 && (
                <section name="portfolio" className={Styles.PortfolioSection}>
                    <h2>Portfolio</h2>
                    <div className={Styles.Gallery}>
                        {designs.map(
                            (
                                {
                                    node: {
                                        childMarkdownRemark: {
                                            frontmatter: design,
                                        },
                                    },
                                },
                                i
                            ) =>
                                // get only the first two projects
                                i < 2 && (
                                    <div key={i}>
                                        <div className={Styles.PrevImg}>
                                            <img
                                                alt="Project preview"
                                                src="/img/bg.png"
                                            />
                                        </div>
                                        <div className={Styles.Options}>
                                            <span>{design.title}</span>
                                            <Link to="/">View site</Link>
                                        </div>
                                    </div>
                                )
                        )}
                    </div>
                    <Link to="/me/portfolio">View all my works ➤</Link>
                </section>
            )}
        </>
    )
}
