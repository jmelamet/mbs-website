import React, { Component } from "react"
import parse from 'html-react-parser'

export default class Section extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const data = this.props.data

        return (
            <div className="section">
                {data.innerBlocks.map((block) => {
                    return (
                        <React.Fragment key={`${block.name}_${block.order}`}>
                            {parse(block.saveContent)}
                        </React.Fragment> 
                    )
                })}
            </div>
        )
    }
}