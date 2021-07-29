import React, { Component } from "react"
import parse from 'html-react-parser'

export default class Hero extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const data = this.props.data
        const attributes = JSON.parse(data.attributesJSON)

        return (
            <div></div>
        )
    }
}