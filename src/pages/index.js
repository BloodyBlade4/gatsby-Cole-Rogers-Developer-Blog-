import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/homeLayout'
import Head from '../components/head'
import * as blogStyles from './blog.module.scss'


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
            <h1>Hello,</h1>
            <p> I'm Cole, an ECE student at The University of Arizona. </p>
            <p>
                    This blog was made to gain experience in development skills and get a taste of AWS services.
                In the future, I will be uploading projects here to show case programming skills, share how I've overcome
                difficult roadblocks, and maybe have a little fun. I have a few future projects in mind, which include:
            </p>
            <ol style={{borderBottom: '2px solid'}}>
                <li>
                    Touch up details on this site (additional features,
                    develop immaculate (clean) code, and experiment more with AWS)</li>
                <li>
                    IOS application: medication reminder, daily mood diary, period chart
                    (every available app has difficulty giving proper and relaiable notifications/reminders) </li>
                <li>
                    C# 3D Video Game: role-playing, social, city builder
                    (Already in development. Put on the back burner temporarily to get some smaller projects
                    done for resume purposes.) </li>
            </ol>

            
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => { //Getting each variable in an array of edges. passing thorugh "edge"
                    return (
                        <li className={blogStyles.post}>
                                
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