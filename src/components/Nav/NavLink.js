import React from 'react';
import  { Link } from 'gatsby';
import Styles from './index.module.scss';

const navLink = (props) => {
    return (
        <Link
            className={Styles.Link}
            to={`/${props.href}`}
            activeClassName={Styles.ActiveLink}
            title={props.title}
        >
            {props.nav.toUpperCase()}
        </Link>
       
    )
}

export default navLink;