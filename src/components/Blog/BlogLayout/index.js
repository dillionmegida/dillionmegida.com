import React from "react"

import Newsletter from "../../Newsletter"
import Layout from "../../Layout"
import WithLove from '../WithLove';

const BlogLayout = props => {
    return (
        <Layout
            PageTitle="Dillion Megida &#128640; - Technical Writer and Front End Developer"
            PageLink="/"
            PageDescription="Dillion is a front end developer, a technical writer and a graphics designer."
        >
            {props.children}
            <WithLove />
            <Newsletter />
        </Layout>
    )
}

export default BlogLayout
