//create and export a template for blog post pages
import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Head from '../components/head'


export const query = graphql`
query ( $slug: String! ){
    contentfulBlogPost ( slug: {eq: $slug }) {

        title
        publishedDate(formatString: "MMMM Do, YYYY")
        slug
        postBody {
            raw
            references {
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

const Blog = (props) => {
    const getOptions = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => {
                const imgFound = getImage(props.data.contentfulBlogPost.postBody.references.find(el => el.contentful_id === node.data.target.sys.id))

                return (<GatsbyImage image={imgFound} placeholder="blurred" alt="blog image" />)
            }
        }
    }
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1> {props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.postBody.raw), getOptions)}
        </Layout>
    )
}

export default Blog