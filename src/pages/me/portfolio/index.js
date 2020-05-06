import React from "react"
import Styles from "./index.module.scss"

import Header from "../../../components/Header"
import { graphql } from "gatsby"
import Helmet from "../../../components/Helmet"
import DesignTemplate from "../../../components/Me/ProjectTemplate"

export default ({ data }) => {
    const allDesigns = data.allMarkdownRemark.edges
    return (
        <>
            <Helmet
                PageTitle="My Portfolio"
                PageDescription="Works that I've done and websites I've designed"
                PageLink="/me/portfolio"
            />
            <Header />
            <main className={Styles.Main}>
                <section className={Styles.Projects}>
                    {allDesigns.map(({ node: { frontmatter: design } }, i) => (
                        <DesignTemplate
                            key={i}
                            title={design.title}
                            cover={design.cover}
                            link={design.link}
                            desktop={design.desktop}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}

export const query = graphql`
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
`
