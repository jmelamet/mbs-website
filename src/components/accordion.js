import React, { Component } from "react"

export default class Accordion extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.handleAccordion = this.handleAccordion.bind(this)
    }

    handleAccordion = (event) => {
        const accordion = event.currentTarget

        if (accordion.classList.contains('opened')) {
            accordion.classList.remove('opened')
        } else {
            accordion.classList.add('opened')
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