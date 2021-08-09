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
	const form = document.getElementsByClassName('gform_wrapper')
	const confirmation = document.getElementsByClassName('contact__confirmation')

	const customerName = document.getElementsByClassName('customer-name')

	form[0].classList.add('hidden')
	customerName[0].innerText = values["input_1"]
	confirmation[0].classList.add('visible')

	animateScrollTo(0)
}

const ContactForm = () => (
    <GravityFormForm
        id={15}
        formData={AllGravityData()}
        lambda="https://devnerdcow.wpengine.com/wp-json/formsubmit/v1/submit/"
        successCallback={handleSuccess}
        errorCallback={handleError}
    />
)

export default ContactForm