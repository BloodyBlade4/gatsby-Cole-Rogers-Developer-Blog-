import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div style={{ backgroundColor: '#A3834D', minHeight: '100vh', boxSizing: 'border-box' }}>
            <div className={layoutStyles.container}>

                <Header />
                <div className={layoutStyles.headerBlock} />
                <div className={layoutStyles.containerColumnBackground}>
                    {props.children}
                </div>
                   
                
            </div>
            <Footer />
        </div>
    )
}

export default Layout