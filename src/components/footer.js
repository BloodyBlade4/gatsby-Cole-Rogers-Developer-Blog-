import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
	        site {
  	            siteMetadata {
			            author
                }
             }
        }
    `)

    return (
        <footer>
            <div style={{
                position: 'relative',
                left: 0,
                bottom: 0,
                right: 0,
                height: '60px',
                backgroundColor: 'rgb(230,230,230)',
                display: 'flex', //stack items left to right
                listStyleType: 'none', //remove bulletpoints
                //margin: 0 //remove margin shifts that lists typically get.
            }} >
                <div style={{
                    color: 'black',
                    fontSize: '.9rem',
                    marginLeft: '3rem',
                    position: 'absolute',
                    left: '0',
                    textDecoration: 'none'
                }}>
                    <p> TODO: links to media </p>
                </div>




                    
                <div style={{
                    color: 'black',
                    fontSize: '.9rem',
                    marginRight: '3rem',
                    marginTop: '0',
                    marginBottom: '0',
                    position: 'absolute',
                    right: '0',
                    textDecoration: 'none'
                }}>
                    <p style={{ marginTop: '0', marginBottom: '0' }}>
                        Here are links to social media </p>
                    <p style={{ marginTop: '0', marginBottom: '0' }}>
                        Created by {data.site.siteMetadata.author}, Copyright 2022 </p>
                    
                </div>
            </div>
        </footer>
        )
}

export default Footer