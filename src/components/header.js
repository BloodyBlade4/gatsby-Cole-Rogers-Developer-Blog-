import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'


import * as headerStyles from './header.module.scss'
import { useScrollPosition } from './scrollPosition'


//className={scroll < -150 ? headerStyles.headerScrolling : headerStyles.header}

const Header = () => {
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
    });

    return (
        <header style={{
            position: 'fixed', backgroundPosition: 'fixed',
            backgroundColor: `rgba(230, 230, 230, ${scroll * -.001})`,
            minWidth: '200rem',
            margin: 0,
            left: 0,
            right: 0,
            top: 0
        }} >
            <h1> <Link className={headerStyles.title} to='/'>
                {data.site.siteMetadata.title}
            </Link> </h1>
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

export default Header