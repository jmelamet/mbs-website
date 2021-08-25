import React from 'react'
import GravityFormForm from 'gatsby-gravityforms-component'
import { useStaticQuery, graphql } from 'gatsby'

import animateScrollTo from "animated-scroll-to"

const AllGravityData = () => {
    const { allGfForm } = useStaticQuery(
        graphql`
            query {
				allGfForm {
					edges {
						node {
							formId
							slug
							apiURL
							descriptionPlacement
							formFields {
								id
								label
								labelPlacement
								description
								descriptionPlacement
								type
								choices
								content
								errorMessage
								inputMaskValue
								isRequired
								visibility
								cssClass
								placeholder
								size
								defaultValue
								maxLength
								conditionalLogic
								emailConfirmEnabled
							}
							button {
								text
							}
							confirmations {
								message
							}
						}
					}
				}
            }
        `
    )
    return allGfForm
}

function handleError({values, error, reset}) {

}

function handleSuccess({values, reset, confirmations}) {
    const steps = document.getElementsByClassName('step')
	const breadcrumbs = document.getElementsByClassName('breadcrumb')
	const customerName = document.getElementsByClassName('customer-name')

	steps[2].classList.remove('visible')
	customerName[0].innerText = values["input_1"]
	steps[3].classList.add('visible')

	animateScrollTo(0)

	for (let breadcrumb of breadcrumbs) {
		breadcrumb.classList.remove('active')
		breadcrumb.classList.add('breadcrumb--finished')
	}
}

const SignUpForm = () => (
    <GravityFormForm
        id={2}
        formData={AllGravityData()}
        lambda="https:///metronomeprod.wpengine.com/wp-json/formsubmit/v1/"
        successCallback={handleSuccess}
        errorCallback={handleError}
    />
)

export default SignUpForm