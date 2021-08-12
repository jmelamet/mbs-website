import React, { Component } from "react"
import parse from 'html-react-parser'
import Table from '../components/table'

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
                    return (
                        <div className={`numbered-section ${attributes.title === undefined ? "numbered-section--wo-title" : ""}`} key={`${block.name}_${block.order}`}>
                            <div className="numbered-section__head">
                                <div className="counter"><span>{block.order + 1}</span></div>
                                {attributes.title !== undefined ?
                                    <h2>{attributes.title}</h2>
                                    :
                                    <div>
                                        {block.innerBlocks.map((innerBlock) => {
                                            return (
                                                <React.Fragment key={`${innerBlock.name}_${innerBlock.order}`}>{parse(innerBlock.saveContent)}</React.Fragment>
                                            )
                                        })}
                                    </div>
                                }
                            </div>
                            <div className="numbered-section__body">
                                {attributes.title !== undefined &&
                                    block.innerBlocks.map((innerBlock) => {
                                        if (innerBlock.name === 'nerdcow/table') {
                                            return (
                                                <Table data={innerBlock} key={`${innerBlock.name}_${innerBlock.order}`}/>
                                            )
                                        } else {
                                            return (
                                                <React.Fragment key={`${innerBlock.name}_${innerBlock.order}`}>{parse(innerBlock.saveContent)}</React.Fragment>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}