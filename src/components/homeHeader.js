import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'


import * as headerStyles from './header.module.scss'
import { useScrollPosition } from './scrollPosition'

const HomeHeader = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const [scroll, setScroll] = useState(0);

    useScrollPosition(function setScrollPosition({ currentPosition }) {
        setScroll(currentPosition.y);
    })


    return (
        <header style={{
            position: 'fixed', 
            backgroundColor : `rgba(137, 186, 240, ${scroll * -.001})`,
            borderBottom: `3px solid rgba(0, 0, 0, ${scroll * -.0008}`,
            minWidth: 'auto',
            left: 0,
            right: 0,
            top: 0,
            zIndex: 20,
        }} >
            <h1 style={{ textAlign: 'center' }}> <Link className={headerStyles.title} to='/'>
                {data.site.siteMetadata.title} </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/"> Home </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about"> About Me </Link>
                    </li>
                    
                </ul>
            </nav>

        </header>
    )
}

export default HomeHeader