import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import SignUpForm from "../components/signUpForm"

export default class IndexPage extends Component {
	render() {
		const { data } = this.props
		const content = data.allWpPage.edges[0].node.content;

		return (
			<main>
				<title>Home Page1</title>
				<div>
					<p>Test</p>
					<div dangerouslySetInnerHTML={{ __html: content }} />
					<Link to="/sign-up/">Sign up</Link>
				</div>
			</main>
		)
	}
}

export const query = graphql`
    query {
		allWpPage(filter: {id: {eq: "cG9zdDo1"}}) {
			edges {
				node {
					id
					template {
						templateName
					}
					content
				}
			}
		}
    }
`