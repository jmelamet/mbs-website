import React, { Component } from "react"

export default class Page extends Component {
	render() {
        const data = this.props.pageContext
        console.log(data)
		return (
            <main>
                <h1>{data.title}</h1>
                <div dangerouslySetInnerHTML={{__html: data.content}}/>
            </main>
        )
    }
}