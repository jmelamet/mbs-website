import React, { Component } from "react"
import parse from 'html-react-parser'
import Seo from 'gatsby-plugin-wpgraphql-seo';

import Hero from '../components/hero'
import Boxes from '../components/boxes'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Table from '../components/table'
import NumberedSections from '../components/numberedSections'
import Section from '../components/section'

export default class Page extends Component {
	render() {
        const data = this.props.pageContext

		return (
            <>
                <Seo post={data} />
                <div className="wrapper">
                    <Navigation/>
                    <div className="container__wrapper">
                        <div className="container container--page">
                            {data.blocks.map((block) => {
                                if (block.name === 'nerdcow/hero') {
                                    return (
                                        <Hero data={block} key={`${block.name}_${block.order}`}/>
                                    )
                                } else if (block.name === 'nerdcow/box-wrap') {
                                    return (
                                        <Boxes data={block} key={`${block.name}_${block.order}`}/>
                                    )
                                } else if (block.name === 'nerdcow/table') {
                                    return (
                                        <Table data={block} key={`${block.name}_${block.order}`}/>
                                    )
                                } else if (block.name === 'nerdcow/section-wrap') {
                                    return (
                                        <NumberedSections data={block} key={`${block.name}_${block.order}`}/>
                                    )
                                } else if (block.name === 'nerdcow/wrapper') {
                                    return (
                                        <Section data={block} key={`${block.name}_${block.order}`}/>
                                    )
                                } else {
                                    return (
                                        <React.Fragment key={`${block.name}_${block.order}`}>{parse(block.saveContent)}</React.Fragment>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <Footer/>
                </div>
            </>
        )
    }
}