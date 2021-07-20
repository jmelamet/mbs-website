const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // query content for WordPress pages
    const result = await graphql(`
        query {
            allWpPage {
                nodes {
                    id
                    content
                    title
                    uri
                    template {
                        templateName
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const pages = result.data.allWpPage.nodes
    let template = path.resolve(`./src/templates/page.js`)

    pages.forEach(page => {
        if (page.template.templateName === "Sign Up") {
            template = path.resolve(`./src/templates/sign-up.js`)
        }
        createPage({
            path: page.uri,
            component: template,
            context: {
                id: page.id,
                content: page.content,
                title: page.title,
                template: page.template.templateName
            },
        })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === `WpPage`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `uri`,
            node,
            value,
        })
    }
}