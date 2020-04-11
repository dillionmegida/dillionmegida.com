import React from "react"
import Styles from "./index.module.css"

import Header from "../../../components/me/Header"
import { graphql } from "gatsby"
import Helmet from "../../../components/Helmet"
import DesignTemplate from "../../../components/me/portfolio/template"

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
                {allDesigns.map(({ node: { frontmatter: design } }, d) => (
                    <DesignTemplate
                        title={design.title}
                        cover={design.cover}
                        link={design.link}
                    />
                ))}
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
                    }
                }
            }
        }
    }
`
