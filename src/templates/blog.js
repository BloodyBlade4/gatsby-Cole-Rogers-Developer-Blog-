//create and export a template for blog post pages
import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import Img from 'gatsby-image'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Link } from 'gatsby'


import Layout from '../components/layout'
import Head from '../components/head'


export const query = graphql`
query ( $slug: String! ){
    contentfulBlogPost ( slug: {eq: $slug }) {
        ... on ContentfulBlogPost {
            contentful_id
            title
            slug
        }
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        slug
        postBody {
            raw

            references {
                    contentful_id
                    

                ... on ContentfulAsset {
                    contentful_id

                    gatsbyImageData( formats: [WEBP, AUTO])
                    __typename
                }
            }
        }
    }
}
`
//gatsbyImageData( formats: [WEBP, AUTO])

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>


const Blog = (props) => {
    //TODO: Add the correct alt name. 
    const getOptions = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => {
                const imgFound = getImage(props.data.contentfulBlogPost.postBody.references.find(el => el.contentful_id === node.data.target.sys.id))

                return (
                    
                    <GatsbyImage image={imgFound} alt="blog image" />
                )
            }
        }
    }
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <h1> {props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.postBody.raw), getOptions)}

        </Layout>
    )
}

export default Blog