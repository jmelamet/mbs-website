import React, { Component } from "react"
import parse from 'html-react-parser'

export default class Boxes extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.elementsWrapper = React.createRef()
    }

    render() {
        const data = this.props.data
        const wrapperAttributes = JSON.parse(data.attributesJSON)

        return (
            <div className={`boxes-wrapper ${wrapperAttributes.columns}`}>
                {data.innerBlocks.map((block) => {
                    const attributes = JSON.parse(block.attributesJSON)
                    let backgroundType

                    if (attributes.backgroundType === "border-blue") {
                        backgroundType = "box--border-blue"
                    } else if (attributes.backgroundType === "filled-red") {
                        backgroundType = "box--filled-red"
                    } else if (attributes.backgroundType === "border-red") {
                        backgroundType = "box--border-red"
                    } else {
                        backgroundType = "box--filled-blue"
                    }

                    if (attributes.variant === "link") {
                        return (
                            <a className={`box box--link ${backgroundType}`} key={`${block.name}_${block.order}`} href={attributes.url}>
                                {parse(block.saveContent)}
                            </a>
                        )
                    } else {
                        return (
                            <div className={`box ${backgroundType}`} key={`${block.name}_${block.order}`}>
                                {parse(block.saveContent)}
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}