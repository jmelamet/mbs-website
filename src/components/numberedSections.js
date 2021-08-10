import React, { Component } from "react"
import parse from 'html-react-parser'

export default class NumberedSections extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const data = this.props.data

        return (
            <div className="numbered-sections">
                {data.innerBlocks.map((block) => {
                    const attributes = JSON.parse(block.attributesJSON)
                    console.log(block, attributes)
                    return (
                        <div className="numbered-section" key={`${block.name}_${block.order}`}>
                            <div className="numbered-section__head">
                                <div className="counter"><span>{block.order}</span></div>
                                <h2>{attributes.title}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}