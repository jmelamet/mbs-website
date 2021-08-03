import React, { Component } from "react"
import parse from 'html-react-parser'
import Typewriter from 'typewriter-effect'

export default class Hero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typingElements: [],
        }

        this.elementsWrapper = React.createRef()
    }

    typingEffect = () => {
        let elements = []
        const elementsWrapper = this.elementsWrapper.current

        for (let typingItem of elementsWrapper.children) {
            elements.push(typingItem.innerText)
        }

        this.setState({typingElements: elements})
    }

    componentDidMount = () => {
        this.typingEffect()
    }

    render() {
        const data = this.props.data
        const attributes = JSON.parse(data.attributesJSON)

        return (
            <div className="usp">
                <span className="usp__invisible" ref={this.elementsWrapper}>
                    {parse(data.saveContent)}
                </span>
                <h1 className="usp__heading">{attributes.text}</h1>
                <div className="usp__typing" >
                    <h1>
                        <Typewriter
                            options={{
                                strings: this.state.typingElements,
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 25,
                                pauseFor: 1500
                            }}
                        />
                    </h1>
                </div>
            </div>
        )
    }
}