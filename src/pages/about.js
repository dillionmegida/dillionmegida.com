import React from 'react';
import Dp from '../components//common/Dp';
import Layout from '../containers/Layout/Layout';
import Styles from '../styles/About.module.css';
import { Link } from 'gatsby';

const ProjectList = [
    {
        title: 'CSS Flex Generator',
        desc: 'A playground built with React for helping web developers understand how flex containers work.',
        cover: 'https://res.cloudinary.com/dillionmegida/image/upload/v1570444392/images/website/flex-generator-site-cover.jpg',
        link: 'https://cssflex-generator.netlify.com'
    },
    {
        title: 'Burger Builder App',
        desc: 'First application built with React. It was inspired by a course on Udemy on React and most parts of the application were directed by the course. I also added personal features, built it from scratch again and hosted on Heroku.',
        cover: 'https://res.cloudinary.com/dillionmegida/image/upload/v1570445060/images/website/burger-app-cover.jpg',
        link: 'https://deee-burger-app.herokuapp.com/'
    }

];

let About = () => (
    <Layout
        PageTitle='About Me - Dillion Megida'
        PageLink='/about'
        PageDescription='Dillion is a Frontend Developer, a Tecnical Writer and a Graphics Designer.'
        PageKeywords='Dillion Megida, Dillion, Megida, web accessibility, DevCommunity, Front-end Developer, Technical Writer, Freelancer, Web Developer, Web Designer, Software Developer, Nigerian, Developer'
        TwitterCardTtitle='DILLION MEGIDA'
    >
        <h1 style={{ textAlign: 'center' }}>About Me</h1>
        <section className={Styles.AboutSection}>
            <section className={Styles.Bio}>
                <h3 align='left'>Front End Developer, Technical Writer and Graphics Deeesigner</h3>
                <p align='justify'>
                    I'm passionate about Web Accessibility and JAMstack applications.<br /><br />
                    I write mostly about front-end web development topics on my blog here, <a href='https://blog.soshace.com/author/dillionmegida/' title='Soshace Blog'>Soshace</a> and <a href='https://dev.to/dillionmegida' title='DEV Blog'>Dev.to</a>. I'm also the Founder of <a href="https://thewebfor5.com" title="The Web For Five Homepage">TheWebFor5</a>.<br /><br />
                    Proficient in HTML, CSS, JS, ReactJS and GatsbyJS.<br /><br />
                    Efficient use of Adobe Photoshop and Adobe Illustrator for graphics designing. These include photo editing, logo designing and advertisement cards. <br /><br />
                    Average use of Adobe After Effects and Adobe Premiere Pro for video editing and motion graphics.
                    <br />
                    Founder, <a href='https://twitter.com/deeesignsstudio'>Deeesigns Studios</a>, which deals in Graphics Designing.
                    <br />
                    <br />
                    <a className={Styles.Resume} href='/resume.pdf' title='My Resume' target='_blank'>
                        Resume
                    </a>
                </p>
            </section>
            <section className={Styles.Dp}>
                <Dp imgDivClass={Styles.ImgDiv} />
                <h1>DILLION MEGIDA <span role='img' aria-label='Rocket Emoji'>&#128640;</span></h1>
                <p>
                    <a className={Styles.Contact} href='mailto:dillionmegida@gmail.com'><i className="fa fa-envelope"></i> dillionmegida@gmail.com</a>
                    <a className={Styles.Contact} href="tel:+2349058961095"><i className="fa fa-phone"></i> +234 905 896 1095</a>
                    <Link to='/contact' title='Contact Me'>
                        Contact Me
                    </Link>
                </p>
            </section>
        </section>
        <a className={Styles.CheckGitHub} href='https://github.com/dillionmegida' title='GitHub Profile'>Check My Projects on GitHub</a>
    </Layout >
);

export default About;
