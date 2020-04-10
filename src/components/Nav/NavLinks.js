import React from 'react';
import NavLink from './NavLink';

const navLinks = () => (
    <React.Fragment>
        <NavLink href='/' title="Dillion Megida's Blog" nav='blog'/>
        <NavLink href='/me' title="About Me" nav='about'/>
    </React.Fragment>
);

export default navLinks;