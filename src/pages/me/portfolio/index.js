import React from "react"

import Header from "../../../components/me/Header"
import { graphql } from "gatsby"
import Helmet from "../../../components/Helmet"

export default ({ data: { allWebDesigns } }) => {
    return (
        <>
            <Helmet
                PageTitle='My Portfolio'
                PageDescription="Works that I've done and websites I've designed"
                PageLink='/me/portfolio'
            />
            <Header />
            <main>
                <pre>
                    {allWebDesigns.edges.map(
                        ({ node: { childMarkdownRemark: md } }) => (
                            <h1>{md.frontmatter.title}</h1>
                        )
                    )}
                </pre>
            </main>
        </>
    )
}

export const query = graphql`
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
`
