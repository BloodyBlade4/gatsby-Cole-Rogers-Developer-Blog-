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
        <footer ClassName={footerStyles.footer}>
            <p>Created by {data.site.siteMetadata.author}, Copyright 2022 </p>
        </footer>
        )
}

export default Footer