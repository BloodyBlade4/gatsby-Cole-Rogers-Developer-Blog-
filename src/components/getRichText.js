import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const GetRichText = (props) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulAboutPage{
                edges {
                    node {
                        aboutPageBody {
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
            }
            allContentfulHomePage{
                edges {
                    node {
                        homeBody {
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
            }
        }
    `);

    if (props.name === 'about') {
        return (
            <div>
                {documentToReactComponents(JSON.parse(data.allContentfulAboutPage.edges[0].node.aboutPageBody.raw),
                    {
                        renderNode: {
                            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                                const imgFound = getImage(data.allContentfulAboutPage.edges[0].node.aboutPageBody.
                                    references.find(el => el.contentful_id === node.data.target.sys.id));

                                return (<GatsbyImage image={imgFound} placeholder="blurred" alt="blog image" />);
                            }
                        }
                    })}
            </div>
        )
    }
    if (props.name === 'home') {
        return(
            <div>
                {documentToReactComponents(JSON.parse(data.allContentfulHomePage.edges[0].node.homeBody.raw),
                    {
                        renderNode: {
                            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                                const imgFound = getImage(data.allContentfulHomePage.edges[0].node.homeBody.references.find
                                    (el => el.contentful_id === node.data.target.sys.id));

                                return (<GatsbyImage image={imgFound} placeholder="blurred" alt="blog image" />);
                            }
                        }
                    })}
            </div>
        )
    }
}
