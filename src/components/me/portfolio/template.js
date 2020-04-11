import React from "react"
import Styles from "./index.module.css"

import PropTypes from "prop-types"
import { Link } from "gatsby"

const Template = props => {
    const { cover, title, link, desktop = true } = props
    return (
        <div className={Styles.Design}>
            <div className={Styles.PrevImg}>
                <img alt="Project preview" src={cover} />
            </div>
            <div className={Styles.Options}>
                {desktop && (
                    <p className={Styles.Notification}>
                        Supported for desktop view only
                    </p>
                )}
                <span>{title}</span>
                <Link to={`/designs/${link}`}>View site</Link>
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
