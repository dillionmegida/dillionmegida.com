import React from 'react';
import { Link } from 'gatsby';
import Newsletter from '../common/Newsletter';
import { formatBlogDate } from '../common/functions';
import Layout from '../../containers/Layout/Layout';

let Blog = (props) => (
    <Link
        to={props.href}
        title={props.title}
        style={{
            fontFamily: 'Antic, helvetica'
        }}
    >
        <h2>{props.title}</h2>
        <p style={{color: 'purple'}}>{formatBlogDate(props.date)} | {props.readTime} read</p>
        <p style={{lineHeight: '25px'}}>
            {props.content}
        </p>
        {
            props.tags ?
            
            <p className="TagsSection">
                {
                    props.tags.map((tag, index) =>
                        // <Link key={`${tag}_${index}`} to={`/tags/${tag}`} title={`Posts tagged with ${tag}`} className="Tag">
                        //     #{tag}
                        // </Link>
                        <span className='Tag' key={`${tag}_${index}`}>
                            #{tag}
                        </span>
                    )
                }
            </p>

            : null
        }
    </Link>
)


    export default ({pageContext}) => {
    const { pageCount }  = pageContext
    const { index: pageIndex } = pageContext
    const isFirst = pageContext.index === 1
    const isLast = pageContext.last
    const prevPage = !isFirst && pageIndex - 1 === 1 ? '/' : pageIndex - 1
    const nextPage = !isLast && pageContext.index + 1

    return (
        <Layout
            PageTitle='Dillion Megida &#128640; - Technical Writer and Front End Developer'
            PageLink='/'
            PageDescription="Dillion is a front end developer, a technical writer and a graphics designer."
            PageKeywords='branding, design, dillion megida, dillion, megida, web developer, web development, frontend'
            TwitterCardTtitle='Dillion Megida'

            //The copyright only shows on the blog page and on each blog for mobile
            // ...But it always shows for large screens
            ShowMobileCopyright
        >  
            <div className='SearchSection'>
                <Link to='/search' title='Search articles'>
                    <i className='fa fa-search'></i> <span>Search Articles</span>
                </Link>
            </div>
            <section className='Blogs'>
                {
                    pageContext.group.map(({ node }) => (
                        <article key={node.id} className='Blog'>
                            <Blog
                                href={node.fields.slug}
                                title={node.frontmatter.title} 
                                readTime={`${node.timeToRead} min${node.timeToRead > 1 ? 's' : ''}`}
                                date={node.frontmatter.date}
                                tags={node.frontmatter.tags}
                                content={
                                    node.frontmatter.pageDescription.length > 150 ? `${node.frontmatter.pageDescription.substr(0,150)}...` : node.frontmatter.pageDescription
                                }
                            />
                        </article>
                ))}
            </section>
            {/* Pagination */}
            <div className="Pagination">
                {!isFirst && (
                <Link className="previous" to={`/${prevPage}`} rel="prev">
                    ← Previous Page
                </Link>
                )}
                {!isLast && (
                <Link className="next" to={`/${nextPage}`} rel="next">
                    Next Page →
                </Link>
                )}
            </div>
            <Newsletter />
        </Layout>
    )
}

// I made use of this component in the tag template and search page
export { Blog };