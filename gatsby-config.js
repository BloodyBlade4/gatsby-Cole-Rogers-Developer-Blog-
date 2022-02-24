/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: 'Blog Coroutine',
        author: 'Cole Rogers',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        'gatsby-image',
        'gatsby-plugin-image',
        'gatsby-plugin-sass',
        //`gatsby-transformer-sharp`,
        'gatsby-plugin-sharp',
        { //This is to be able to access files (e.g. the markdown files) But is not used anymore.
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,

            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                    resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false,
                        }
                    }
                    
                ]
            }
        },
        'gatsby-plugin-image'
    ],
}

/*
 
        */
