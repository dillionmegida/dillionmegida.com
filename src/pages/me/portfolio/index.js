import React from "react"
import Styles from "./index.module.scss"

import Header from "../../../components/Header"
import Footer from '../../../components/Footer';
import { graphql } from "gatsby"
import Helmet from "../../../components/Helmet"
import DesignTemplate from "../../../components/Me/Portfolio/template";

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
                    {allDesigns.map(({ node: { frontmatter: project } }, i) => (
                        <DesignTemplate
                            key={i}
                            title={project.title}
                            cover={project.cover}
                            link={project.link}
                            desktop={project.desktop}
                        />
                    ))}
                </section>
            </main>
            <Footer />
        </>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { fields: { slug: { regex: "/^(/projects/)/" } } }
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
