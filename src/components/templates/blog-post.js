import React from "react";
import { Link, graphql } from "gatsby";
import Layout from '../Layout/Layout';
import Disqus from './disqus';
import { formatBlogDate } from '../common/functions';

import Styles from '../../styles/BlogTemplate.module.css';

export default ({ data }) => {
  const post = data.markdownRemark
  return (
      <Layout
        PageTitle={`${post.frontmatter.title} - Dillion's Blog`}
        PageLink={post.fields.slug}
        PageDescription={post.frontmatter.pageDescription}
        PageKeywords={post.frontmatter.pageKeywords}
        TwitterBlogImage={post.frontmatter.cover ? post.frontmatter.cover : 'https://res.cloudinary.com/dillionmegida/image/upload/v1567646950/images/website/favicon2-card.png'}
        LargeTwitterCard = {post.frontmatter.cover ? true : false}

        //The copyright only shows on the blog page and on each blog for mobile
        // ...But it always shows for large screens
        ShowMobileCopyright
      >
        <main className={Styles.BlogPost}>
          <article>
            <div className={Styles.BlogInfo}>
              <h1 className={Styles.BlogTitle}>{post.frontmatter.title}</h1>
              <p className={Styles.BlogDate}>{formatBlogDate(post.frontmatter.date)} | {post.frontmatter.readTime} read</p>
              {
                post.frontmatter.tags ?
                <p>
                  {
                    post.frontmatter.tags.map((tag, index) => (
                      <Link key={`${tag}_${index}`} to={`/tags/${tag}`}>
                        #{tag}
                      </Link>
                    ))
                  }
                </p>
                : null
              }
            </div>
            {
              post.frontmatter.cover && post.frontmatter.cover !== '' ?
              <img src={post.frontmatter.cover} alt='Blog Cover' width='100%' /> : 
              null
            }
            <div className={Styles.BlogContent}>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </article>

          {/* Sharing the article with media APIs */}
          <p style={{fontSize: '25px', fontWeight: 'bold', margin: '0'}}>Share this article</p>
          <p style={{fontSize: '30px', margin: '0'}}>
            <a href={`https://twitter.com/intent/tweet?text=${post.frontmatter.title} by @iamdillion - https://dillionmegida.com${post.fields.slug}`} target='_blank' rel="noopener noreferrer">
              <i style={{color: '#1DA1F2'}} className='fa fa-twitter'></i>
            </a>
            </p>
          <hr/>
          <Disqus Url={post.fileAbsolutePath} PostId={post.id} PostTitle={post.frontmatter.title}/>
        </main>
      </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        date
        readTime
        pageDescription
        pageKeywords
        cover
        tags
      }
    }
  }
`