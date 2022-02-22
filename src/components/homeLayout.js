/* Used for a page template, holding header, image, and footer 
 * Same as "layout" except this contains an image as well. 
 * 
 * 
 * TODO:
 * Use GatsbyImage, querying the image, to save loading expenses. 
*/
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'
const homeImage = '../images/settingSunFinal.JPG'

const Layout = (props  ) => {
    return (
        <div>
            <div className={layoutStyles.containerBackgroundImage}>
                <div className={layoutStyles.headerContent} >
                    <Header />
                </div>
                <StaticImage
                    src={homeImage}
                    alt="Home Page Image"
                    placeholder="blurred"
                    //Layout="fullWidth"
                    className={layoutStyles.backgroundImage}
                />
            </div>

            


            <div className={layoutStyles.container}>
                <div className={layoutStyles.content} >
                    <Header />

                    {props.children}
                </div>
                
            </div>
            <Footer />

        </div>
    )
}

export default Layout