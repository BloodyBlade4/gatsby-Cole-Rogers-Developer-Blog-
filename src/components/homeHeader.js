import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import * as headerStyles from './header.module.scss'


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

    //Header background color details.
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
        window.addEventListener('scroll', (event) => {
            let scroll = window.pageYOffset;
            //console.log(scroll);
            let scrollValue = document.querySelector(".scrollValue");
            if (scrollValue) {
                scrollValue.style.backgroundColor = `rgba(137, 186, 240, ${scroll * .001})`;
                scrollValue.style.borderBottom = `3px solid rgba(0, 0, 0, ${scroll * .0008}`;
            }
            else {
                scrollValue.style.backgroundColor = '#89BAF0';
                scrollValue.style.borderBottom = '3px solid rgb(0,0,0)'
            }
        })
    }
    return (
        <header className="scrollValue" style={{
            position: 'fixed',

            Width: '100%',
            left: 0,
            right: 0,
            top: 0,
            zIndex: 5,
            fontSize: '2rem',
        }}>

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