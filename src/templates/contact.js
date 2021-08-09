import React, { Component } from "react"
import parse from 'html-react-parser'
import Seo from 'gatsby-plugin-wpgraphql-seo';

import Hero from '../components/hero'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import ContactForm from '../components/contactForm'

export default class Contact extends Component {
    componentDidMount() {
        let inputs = document.getElementsByClassName('gravityform__field__input')
        let phoneInput = document.getElementsByClassName('gravityform__field__input__phone')
        for (let input of inputs) {
            input.addEventListener('change', this.textInputValidation)
        }

        this.setInputFilter(phoneInput[0], function(value) {
            return /^\d*$/.test(value)
        })
    }

    textInputValidation() {
        if (this.classList.contains("gravityform__field__input__email")) {
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value)) {
                this.parentElement.classList.add('verified')
            } else {
                this.parentElement.classList.remove('verified')
            }
        } else {
            if (this.value !== "") {
                this.parentElement.classList.add('verified')
            } else {
                this.parentElement.classList.remove('verified')
            }
        }
    }

    setInputFilter(phoneInput, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
            phoneInput.addEventListener(event, function() {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value
                    this.oldSelectionStart = this.selectionStart
                    this.oldSelectionEnd = this.selectionEnd
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd)
                } else {
                    this.value = ""
                }
            })
        })
    }

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
                                }
                            })}
                            <div className="contact">
                                    <div className="contact__details">
                                    {data.blocks.map((block) => {
                                        if (block.name !== 'nerdcow/hero') {
                                            return (
                                                <div key={`${block.name}_${block.order}`}>{parse(block.saveContent)}</div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="contact__form">
                                    <ContactForm/>
                                    <div className="contact__confirmation">
                                        <h1>Thank you, <span className="customer-name"></span>!</h1>
                                        <p>We’ll get in touch with you to learn more about your startup and discuss details within 48 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </>
        )
    }
}