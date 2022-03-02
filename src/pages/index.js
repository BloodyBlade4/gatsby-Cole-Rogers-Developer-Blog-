import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/homeLayout'
import Head from '../components/head'
import * as blogStyles from './blog.module.scss'
import { GetRichText } from '../components/getRichText'


const HomePage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: { fields:publishedDate, order:DESC } ){
                edges {
                    node {
                        title
                        slug
                        publishedDate (formatString:"MMMM Do, YYYY")


                        postBody {
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
            }
        }
    `)

    return (
        <Layout>
            <Head title="Home" />

            <GetRichText name='home'/>
            
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => { //Getting each variable in an array of edges. passing thorugh "edge"
                    return (
                        <li className={blogStyles.post} key={edge.node.slug}>
                                
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2> {edge.node.title} </h2>
                                <div style={{
                                    gridAutoColumns: '100px'
                                }}>
                                    <p> {edge.node.publishedDate} </p>

                                    <GatsbyImage
                                        image={getImage(edge.node.postBody.references[0])}
                                        alt="blog image"
                                        style={{
                                            maxHeight: '100px'
                                        
                                        }}
                                        imgStyle={{
                                            position: 'absolute',
                                            objectFit: 'contain',
                                            bottom:'0',
                                            zIndex:'0'
                                        }}
                                    />

                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}


export default HomePage

// To link external pages but is not optimized: <a href="/about">About me page</a> WORKS FOR EXTERNAL SITES.