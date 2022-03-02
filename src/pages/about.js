import React from "react"

import Layout from '../components/layout'
import Head from '../components/head'
import { GetRichText } from '../components/getRichText'


const AboutPage = () => {
    return (

        <Layout>
            <Head title="About"/>
            <GetRichText name='about'/>

            <h1 style={{ textAlign: 'center' }}> Contact Me:</h1>
            <h2> Email: 123ColeRogers@gmail.com </h2>
            <h2> Mobile: (520) 686-3993 </h2>
            <h2> <a href="https://www.linkedin.com/in/cole-rogers-70029816a/"
                target="_blank" rel="noopener noreferrer">LinkedIn</a></h2>

            <h2> <a href="https://app.joinhandshake.com/stu/users/26474767" target="_blank"
                rel="noopener noreferrer">Handshake</a></h2>
        </Layout>
    )
}

export default AboutPage
//TODO: How to you link to homepage?