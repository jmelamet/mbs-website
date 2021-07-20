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
    console.log(values, error, reset)
}

function handleSuccess({values, reset, confirmations}) {
    console.log(values, reset, confirmations)
}

const SignUpForm = () => (
    <GravityFormForm
        id={7}
        formData={AllGravityData()}
        // presetValues={{ input_1: 'Michal', input_2: 'michal@nerdcow.co.uk', input_3: '123123123' }}
        lambda="https://devnerdcow.wpengine.com/wp-json/formsubmit/v1/submit/"
        successCallback={handleSuccess}
        errorCallback={handleError}
    />
)

export default SignUpForm