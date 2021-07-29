import React, { Component } from "react"
import parse from 'html-react-parser'
import ReactTypingEffect from 'react-typing-effect'

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
                        <ReactTypingEffect
                            text={this.state.typingElements}
                            cursor=" "
                            typingDelay={0}
                            eraseDelay={1000}
                            eraseSpeed={25}
                            speed={50}
                        />
                    </h1>
                </div>
            </div>
        )
    }
}