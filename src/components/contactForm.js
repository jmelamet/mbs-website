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
    const formWrapper = document.getElementsByClassName('contact__form')
	const form = formWrapper[0].children[0]
	const confirmation = formWrapper[0].children[1]

	const customerName = document.getElementsByClassName('customer-name')

	form.classList.add('hidden')
	customerName[0].innerText = values["input_1"]
	confirmation.classList.add('visible')

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