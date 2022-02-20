// learn more at gatsbyjs.org/docs/api-reference/
//This will list all the apis that we can use for development. 

const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')//get path to template
    //2. Get markdown data
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: { //data that the created page gets.
                slug: edge.node.slug //this is basically passing along the slug (id) so the page can access all the data
                
            }

        })
    })
    //3. Create new pages
}