/* Used for a page template, holding header, image, and footer 
 * Same as "layout" except this contains an image as well. 
 * 
*/
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Footer from '../components/footer'
import HomeHeader from '../components/homeHeader'
import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'
const homeImage = '../images/Mountains.JPG'

const Layout = (props  ) => {
    return (
        <div style={{ backgroundColor: '#A3834D' }}>
            <HomeHeader />
            <StaticImage
                src={homeImage}
                alt="Home Page Image"
                placeholder="blurred"
                className={layoutStyles.backgroundImage}
            />

            <div className={layoutStyles.verticalGradientColor}> </div>
            
            <div className={layoutStyles.container}>

                
                <div className={layoutStyles.containerColumnBackground}>
                    {props.children}
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Layout