import React from "react"
import Styles from './index.module.scss';

import Helmet from "../Helmet"
import Header from "../Header"
import Footer from "../Footer"

const Layout = props => {
    return (
        <>
            <Helmet
                PageTitle={props.PageTitle}
                PageLink={props.PageLink}
                PageDescription={props.PageDescription}
                PageKeywords={props.PageKeywords}
                ImageCard={
                    props.ImageCard
                        ? props.ImageCard
                        : "https://res.cloudinary.com/dillionmegida/image/upload/v1584753510/images/website/deee_iufaho.jpg"
                }
                LargeTwitterCard={props.LargeTwitterCard}
            />
            <Header />
            <div className={Styles.Children}>{props.children}</div>
            <Footer />
        </>
    )
}

export default Layout
