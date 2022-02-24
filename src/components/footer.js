import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import * as footerStyles from './footer.module.scss'

const logoLinkedIn = '../images/logoLinkedin.png'
const logoHandshake = '../images/logoHandshake.png'

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
                height: '100px',
                backgroundColor: '#89BAF0',
                borderTop: '3px solid rgba(0,0,0,.6)',
                display: 'flex', //stack items left to right
                listStyleType: 'none', //remove bulletpoints
            }} >
                


                <ul className={footerStyles.navList}>
                    <li className={footerStyles.listItem} >
                        Social media:
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/cole-rogers-70029816a/" target="_blank"
                        rel="noopener noreferrer">
                            <StaticImage
                                src={logoLinkedIn}
                                alt="LinkedIn Logo Image"
                                placeholder="blurred"
                                className={footerStyles.logoLink}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://app.joinhandshake.com/stu/users/26474767" target="_blank"
                        rel="noopener noreferrer">
                            <StaticImage
                                src={logoHandshake}
                                alt="Handshake Logo Image"
                                placeholder="blurred"
                                className={footerStyles.logoLink}
                            />
                        </a>
                    </li>
                    
                </ul>
                <p style={{
                    position: 'absolute',
                    right: 0
                }}>
                    Created by {data.site.siteMetadata.author}, Copyright 2022
                </p>
                
                
            </div>
        </footer>
        )
}
/* TODO!!!! LINK TO PROJECT WHEN YOU HAVE ONE DONE!
 const logoGitHub = '../images/logoGitHub.png'
<li>
    <a href="   " target="_blank">
        <StaticImage
            src={logoGitHub}
            alt="Git Hub Logo Image"
            placeholder="blurred"
            //Styles that meet Linkedin's requests for appearance, as of 2/22/2022
            className={footerStyles.logoLink}
        />
    </a>
</li>
*/

export default Footer