import React, { Component } from "react"

export default class Accordion extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.handleAccordion = this.handleAccordion.bind(this)
    }

    handleAccordion = (event) => {
        const currentAccordion = event.currentTarget
        const accordions = document.getElementsByClassName('accordion')

        if (currentAccordion.classList.contains('opened')) {
            currentAccordion.classList.remove('opened')
        } else {
            for (let accordion of accordions) {
                accordion.classList.remove('opened')
            }
            currentAccordion.classList.add('opened')
        }
    }

    render() {
        const data = this.props.data
        const attributes = JSON.parse(data.attributesJSON)

        return (
            <div className="accordion" onClick={(event) => this.handleAccordion(event)}>
                <div className="accordion__question">
                    {attributes.question}
                </div>
                <div className="accordion__answer">
                    {attributes.answer}
                </div>
            </div>
        )
    }
}