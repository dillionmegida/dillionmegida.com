import React from "react"
import Styles from "./index.module.scss"

import PropTypes from "prop-types"
import { Link } from "gatsby"

const Template = props => {
    const { cover, title, link, desktop } = props
    return (
        <div className={Styles.Design}>
            <div className={Styles.PrevImg}>
                <img alt="Project preview" src={cover} />
            </div>
            <div className={Styles.Details}>
                <Link to={`/designs/${link}`} className={Styles.Title}>{title}</Link>
                <div className={Styles.More}>
                    {desktop && (<>Supported for desktop view only</>)}
                </div>
            </div>
        </div>
    )
}

Template.propType = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default Template
