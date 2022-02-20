import React from "react"

import Layout from '../components/layout'
import Head from '../components/head'


const HomePage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello,</h1>
            <h2> I'm Cole, an ECE student. </h2>
        </Layout>
    )
}

export default HomePage

// This works to link pages but is not optimized: <a href="/about">About me page</a> WORKS FOR EXTERNAL SITES.