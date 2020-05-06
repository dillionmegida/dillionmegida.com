import React, { Component } from "react"
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
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
