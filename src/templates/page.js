import React, { Component } from "react"
import parse from 'html-react-parser'
import Hero from '../components/hero'
// import WPGBlocks from "react-gutenberg"

export default class Page extends Component {
	render() {
        const data = this.props.pageContext
		return (
            <main>
                <h1>{data.title}</h1>
                <p>Skrt</p>
                {data.blocks.map((block) => {
                    if (block.name === 'nerdcow/hero') {
                        return (
                            <Hero data={block} key={`${block.name}_${block.order}`}/>
                        )
                    } else {
                        return (
                            <div key={`${block.name}_${block.order}`}>
                                <div>{parse(block.saveContent)}</div>
                            </div>
                        )
                    }
                })}
            </main>
        )
    }
}