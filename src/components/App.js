import React from 'react';
import { Helmet } from 'react-helmet';

export default (props) => (
    <div className='App'>
    	<Helmet>
			<html lang="en" />
    		<title>
    			{props.PageTitle}
    		</title>
    		<link rel="canonical" href={`https://dillionmegida.com${props.PageLink}`} /> {/* edit */}

			<meta name='description' content={props.PageDescription} /> {/* edit */}
			<meta name="keywords" content={props.PageKeywords} /> {/* edit */}
			<meta name='author' content='Dillion Megida' />

			<meta name="robots" content="index, follow" />
			<meta name="theme-color" content="#130327" />
			
			<link rel='icon' href='https://res.cloudinary.com/dillionmegida/image/upload/v1570493725/images/website/favicon.png' />

			<meta property="og:image" content={props.ImageCard} />
			<meta property="og:url" content={`https://dillionmegida.com${props.PageLink}`} />
			<meta property="og:type" content="article" />
			<meta property="og:title" content={props.PageTitle} />
			<meta property="og:description" content={props.PageDescription} />

			{/* This selects the summary card by default but if the LargeTwitterCard props is specified, it users the bigger card
			I implemented bigger cards for articles with covers */}
			{
				props.LargeTwitterCard ?
				<meta name="twitter:card" content="summary_large_image" /> :
				<meta name="twitter:card" content="summary" />

			}
			
			<meta name="twitter:site" content="@iamdillion" />
			<meta name="twitter:title" content={props.PageTitle} /> {/* edit */}
			<meta name="twitter:description" content={props.PageDescription} /> {/* edit */}
			<meta name="twitter:image" content={props.ImageCard} />
			<meta name="twitter:creator" content="iamdillion" />

			<meta name="referrer" content="origin-when-crossorigin" />

			{/* For fontawesome */}
			<script src="https://use.fontawesome.com/ec33c661f9.js"></script>
		</Helmet>
        {props.children}
    </div>
)
