import React, { Fragment } from 'react';

const Icon = props => (
    <Fragment>
        <i className={props.class}></i>
    </Fragment>
)
const Share = () => (
    <Icon class='fa fa-share' />
)

export { Share };