import React from 'react'
import GravityFormForm from 'gatsby-gravityforms-component'
import { useStaticQuery, graphql } from 'gatsby'

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

	for (let breadcrumb of breadcrumbs) {
		breadcrumb.classList.add('breadcrumb--finished')
	}
}

const SignUpForm = () => (
    <GravityFormForm
        id={7}
        formData={AllGravityData()}
        lambda="https://devnerdcow.wpengine.com/wp-json/formsubmit/v1/submit/"
        successCallback={handleSuccess}
        errorCallback={handleError}
    />
)

export default SignUpForm