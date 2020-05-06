import React from "react"
import Styles from "./index.module.scss"

import { Link, graphql, useStaticQuery } from "gatsby"
import Helmet from "../../Helmet"

const WebDesign = props => {
    const { link } = props

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
                        }
                    }
                }
            }
        }
    `)

    const designDetails = data.allMarkdownRemark.edges.filter(
        ({ node: { frontmatter } }) => frontmatter.link === link
    )[0]

    const {
        node: { frontmatter: design },
    } = designDetails

    return (
        <>
            <Helmet
                PageTitle="Website design by Dillion Megida"
                PageLink={design.link}
                PageDescription="A single page website designed by Dillion Megida"
            />
            {props.children}
            <div className={Styles.Bottom}>
                <h2>Design Details</h2>
                <p>Name: {design.title || "Design Template"}</p>
                <Link to="/me/portfolio">Check out all designs</Link>
            </div>
        </>
    )
}

export default WebDesign
