import React, { Component } from "react"
import parse from 'html-react-parser'

import Hero from '../components/hero'
import Navigation from '../components/navigation'

export default class Page extends Component {
	render() {
        const data = this.props.pageContext
		return (
            <>
                <div className="wrapper">
                    <Navigation/>
                    <div className="container__wrapper">
                        <div className="container">
                            {data.blocks.map((block) => {
                                // if (block.name === 'nerdcow/hero') {
                                //     return (
                                //         <Hero data={block} key={`${block.name}_${block.order}`}/>
                                //     )
                                // } else {
                                    return (
                                        <div key={`${block.name}_${block.order}`}>
                                            <div>{parse(block.saveContent)}</div>
                                        </div>
                                    )
                                // }
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}