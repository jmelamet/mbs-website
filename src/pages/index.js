import React, { Component } from "react"
import { graphql } from "gatsby"
import SignUpForm from "../components/signUpForm"

export default class IndexPage extends Component {
	render() {
		const { data } = this.props
		// const content = data.allWpPage.edges[0].node.content;

		return (
			<main>
				<title>Home Page1</title>
				<div>
					<div dangerouslySetInnerHTML={{ __html: content }} />
					<div>
						<SignUpForm/>
					</div>
				</div>
			</main>
		)
	}
}

// export const query = graphql`
//     query {
// 		allWpPage(filter: {id: {eq: "cG9zdDo1"}}) {
// 			edges {
// 				node {
// 					id
// 					template {
// 						templateName
// 					}
// 					content
// 				}
// 			}
// 		}
//     }
// `