import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div>
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content} >
                    <Header />

                </div>
            </div>

            <div className={layoutStyles.container}>
                <div className={layoutStyles.content} >

                    {props.children}
                    
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default Layout