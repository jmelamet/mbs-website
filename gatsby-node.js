const path = require(`path`)

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
                    blocks {
                        saveContent
                        name
                        attributesJSON
                        order
                        innerBlocks {
                            saveContent
                            name
                            attributesJSON
                            order
                        }
                    }
                    seo {
                        title
                        metaDesc
                        focuskw
                        metaKeywords
                        metaRobotsNoindex
                        metaRobotsNofollow
                        opengraphTitle
                        opengraphDescription
                        opengraphImage {
                            altText
                            sourceUrl
                            srcSet
                        }
                        twitterTitle
                        twitterDescription
                        twitterImage {
                            altText
                            sourceUrl
                            srcSet
                        }
                        canonical
                        cornerstone
                        schema {
                            articleType
                            pageType
                            raw
                        }
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
    let template

    pages.forEach(page => {
        if (page.template.templateName === "Sign Up") {
            template = path.resolve(`./src/templates/sign-up.js`)
        } else {
            template = path.resolve(`./src/templates/page.js`)
        }
        createPage({
            path: page.uri,
            component: template,
            context: {
                id: page.id,
                content: page.content,
                title: page.title,
                template: page.template.templateName,
                blocks: page.blocks,
                seo: page.seo
            },
        })
    })
}