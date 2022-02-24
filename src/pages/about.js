import React from "react"

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (

        <Layout>
            <Head title="About" /> 
            <h1>About Me:</h1>
                <p>     My name is Cole Rogers. I am an Electrical and Computer Engineering student at the University of Arizona.
                    I have experience in many team and objective driven customer service roles and I'm working to make an impact
                    in the computer science industry.
                </p>
            <p>
                I am currently focusing on the implemtation and development of scalable systems in OOP languages (which is why this blog exists).
                I hope to learn a lot by creating and updating this blog with projects I complete overtime. Also, I believe this will be a wonderful
                    way to show case development skills that I will be continuing to develop.
            </p>

            <h1> Contact Me:</h1>
            <h2> Email: 123ColeRogers@gmail.com </h2>
            <h2> Phone #: (520) 686-3993 </h2>
            <h2> <a href="https://www.linkedin.com/in/cole-rogers-70029816a/"
                target="_blank" rel="noopener noreferrer">LinkedIn</a></h2>
        </Layout>
    )
}

export default AboutPage
//TODO: How to you link to homepage?