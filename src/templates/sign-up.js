import React, { Component } from "react"
import { Link } from "gatsby"
import SignUpForm from "../components/signUpForm"

import informationIcon from "../assets/images/information-icon.svg"

import animateScrollTo from "animated-scroll-to"

export default class SignUp extends Component {
	constructor(props) {
		super(props)
		this.state = {
            isAnyServiceActive: false,
            isAnySpecificActive: false,
            currentStep: 0,
            "Accounting": false,
            "Administration & support": false,
            "Compliance management": false,
            "Risk assessment": false,
            "Not sure": false,
		}

        this.firstButton = React.createRef()
        this.secondButton = React.createRef()

		this.handleService = this.handleService.bind(this)
        this.handleSpecific = this.handleSpecific.bind(this)
        this.handleBreadcrumb = this.handleBreadcrumb.bind(this)
        this.handleSteps = this.handleSteps.bind(this)
	}

	handleService = (event, name, index) => {
        let element = event.currentTarget
        let isAnyServiceActive = false

		let services = document.getElementsByClassName('ginput_container_multiselect')
		let service = services[0].querySelectorAll(`option[value="${name}"]`)
		service[0].selected === false ? service[0].selected = true : service[0].selected = false

        if (element.classList.contains('active')) {
            element.classList.remove('active')
            this.setState({[name]: false})
            let specificsFromService = document.getElementsByClassName(index)
            for (let specific of specificsFromService) {
                if (specific.classList.contains('active')) {
                    specific.click()
                }
            }
        } else {
            element.classList.add('active')
            this.setState({[name]: true})
        }
        
        for (let children of element.parentElement.children) {
            if (children.classList.contains('active')) {
                isAnyServiceActive = true
            }
        }

        isAnyServiceActive ? this.setState({isAnyServiceActive: true}) : this.setState({isAnyServiceActive: false})
	}

    handleSpecific = (event, name) => {
        let element = event.currentTarget
        let isAnySpecificActive = false

		let services = document.getElementsByClassName('ginput_container_multiselect')
		let service = services[0].querySelectorAll(`option[value="${name}"]`)
		service[0].selected === false ? service[0].selected = true : service[0].selected = false

        element.classList.contains('active') ? element.classList.remove('active') : element.classList.add('active')
        
        for (let children of element.parentElement.children) {
            if (children.classList.contains('active')) {
                isAnySpecificActive = true
            }
        }

        isAnySpecificActive ? this.setState({isAnySpecificActive: true}) : this.setState({isAnySpecificActive: false})
	}

    handleBreadcrumb = (event, index) => {
        const element = event.currentTarget
        const siblings = element.parentElement.children
        const steps = document.getElementsByClassName('step')

        if (element.classList.contains('breadcrumb--completed')) {
            steps[this.state.currentStep].classList.remove('visible')
            siblings[this.state.currentStep].classList.remove('active')

            this.setState({currentStep: index})

            if (index === 0) {
                for (let sibling of siblings) {
                    sibling.classList.remove('breadcrumb--completed')
                }
            }

            steps[index].classList.add('visible')
            element.classList.add('active')

            animateScrollTo(0)
        }
    }

    handleSteps = event => {
        event.preventDefault();

        const breadcrumbs = document.getElementsByClassName('breadcrumb')
        const steps = document.getElementsByClassName('step')

        steps[this.state.currentStep].classList.remove('visible')
        breadcrumbs[this.state.currentStep].classList.remove('active')
        breadcrumbs[this.state.currentStep].classList.add('breadcrumb--completed')

        let newStepIndex = this.state.currentStep + 1
        this.setState({currentStep: newStepIndex})

        steps[newStepIndex].classList.add('visible')
        breadcrumbs[newStepIndex].classList.add('active')

        animateScrollTo(0)
    }

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

    componentDidUpdate() {
        this.state.isAnyServiceActive ? this.firstButton.current.classList.remove('button--disabled') : this.firstButton.current.classList.add('button--disabled')
        this.state.isAnySpecificActive ? this.secondButton.current.classList.remove('button--disabled') : this.secondButton.current.classList.add('button--disabled')
    }

	render() {
        return (
            <div className="container__wrapper sign-up-template">
                <div className="container">
                    <div className="sign-up-template__header">
                        <Link to="/" className="logo"></Link>
                        <a href="tel:0207 946 0496" className="info-box">
                            <img src={informationIcon}/>
                            <p><span>Questions?</span> 0207 946 0496</p>
                        </a>
                    </div>
                    <div className="sign-up">
                        <div className="sign-up__breadcrumbs">
                            <div className="breadcrumb active" role="button" onClick={(event) => this.handleBreadcrumb(event, 0)}>
                                <span></span>
                                <p>Services</p>
                            </div>
                            <div className="breadcrumb" role="button" onClick={(event) => this.handleBreadcrumb(event, 1)}>
                                <span className="second"></span>
                                <p>Requirements</p>
                            </div>
                            <div className="breadcrumb" role="button" onClick={(event) => this.handleBreadcrumb(event, 2)}>
                                <span className="third"></span>
                                <p>Contact details</p>
                            </div>
                            <div className="breadcrumb" role="button" onClick={(event) => this.handleBreadcrumb(event, 3)}>
                                <span className="fourth"></span>
                                <p>Confirmation</p>
                            </div>
                        </div>
                        <div className="sign-up__content">
                            <div className="sign-up__steps">
                                <div className="step visible">
                                    <p className="label">Step 1/4</p>
                                    <h1>What services do you need?</h1>
                                    <p>Mix & match services that you need. We’ll nail down the specifics at the next step. If you’re unsure what to pick, we will help you identify gaps in your team.</p>
                                    <div className="sign-up__grid services">
                                        <div className="services__item" onClick={(event) => this.handleService(event, "Accounting", 0)}>
                                            <span className="checkbox"></span>
                                            <p>Accounting</p>
                                        </div>
                                        <div className="services__item" onClick={(event) => this.handleService(event, "Administration & support", 1)}>
                                            <span className="checkbox"></span>
                                            <p>Administration and support</p>
                                        </div>
                                        <div className="services__item" onClick={(event) => this.handleService(event, "Compliance management", 2)}>
                                            <span className="checkbox"></span>
                                            <p>Compliance management</p>
                                        </div>
                                        <div className="services__item" onClick={(event) => this.handleService(event, "Risk assessment", 3)}>
                                            <span className="checkbox"></span>
                                            <p>Risk assessment</p>
                                        </div>
                                        <div className="services__item" onClick={(event) => this.handleService(event, "Not sure", 4)}>
                                            <span className="checkbox"></span>
                                            <p>Not sure</p>
                                        </div>
                                    </div>
                                    <a href="#" className="button button--primary button--next button--disabled" ref={this.firstButton} onClick={(event) => this.handleSteps(event)}>Go to the next step</a>
                                </div>
                                <div className="step">
                                    <p className="label">Step 2/4</p>
                                    <h1>Choose specific services</h1>
                                    <p>If you’re unsure, our consultant will help you figure it out.</p>
                                    <div className="specifics__items">
                                        <div className={`specifics__service${this.state["Accounting"] === true ? ' visible' : ''}`}>
                                            <p className="label">Accounting</p>
                                            <div className="specifics__item 0" role="button" onClick={(event) => this.handleSpecific(event, "Accounts & tax")}>
                                                <span className="checkbox"></span>
                                                <p>Accounts & tax</p>
                                            </div>
                                            <div className="specifics__item 0" role="button" onClick={(event) => this.handleSpecific(event, "Payroll")}>
                                                <span className="checkbox"></span>
                                                <p>Payroll</p>
                                            </div>
                                            <div className="specifics__item 0" role="button" onClick={(event) => this.handleSpecific(event, "VAT returns")}>
                                                <span className="checkbox"></span>
                                                <p>VAT returns</p>
                                            </div>
                                        </div>
                                        <div className={`specifics__service${this.state["Administration & support"] === true ? ' visible' : ''}`}>
                                            <p className="label">Administration & support</p>
                                            <div className="specifics__item 1" role="button" onClick={(event) => this.handleSpecific(event, "Administration 1")}>
                                                <span className="checkbox"></span>
                                                <p>Administration 1</p>
                                            </div>
                                        </div>
                                        <div className={`specifics__service${this.state["Compliance management"] === true ? ' visible' : ''}`}>
                                            <p className="label">Compliance management</p>
                                            <div className="specifics__item 2" role="button" onClick={(event) => this.handleSpecific(event, "Subservice 1")}>
                                                <span className="checkbox"></span>
                                                <p>Subservice 1</p>
                                            </div>
                                            <div className="specifics__item 2" role="button" onClick={(event) => this.handleSpecific(event, "Subservice 2")}>
                                                <span className="checkbox"></span>
                                                <p>Subservice 2</p>
                                            </div>
                                            <div className="specifics__item 2" role="button" onClick={(event) => this.handleSpecific(event, "Subservice 3")}>
                                                <span className="checkbox"></span>
                                                <p>Subservice 3</p>
                                            </div>
                                            <div className="specifics__item 2" role="button" onClick={(event) => this.handleSpecific(event, "Subservice 4")}>
                                                <span className="checkbox"></span>
                                                <p>Subservice 4</p>
                                            </div>
                                            <div className="specifics__item 2" role="button" onClick={(event) => this.handleSpecific(event, "Subservice 5")}>
                                                <span className="checkbox"></span>
                                                <p>Subservice 5</p>
                                            </div>
                                        </div>
                                        <div className={`specifics__service${this.state["Risk assessment"] === true ? ' visible' : ''}`}>
                                            <p className="label">Risk assessment</p>
                                            <div className="specifics__item 3" role="button" onClick={(event) => this.handleSpecific(event, "Compliance 1")}>
                                                <span className="checkbox"></span>
                                                <p>Compliance 1</p>
                                            </div>
                                        </div>
                                        <div className={`specifics__service${this.state["Not sure"] === true ? ' visible' : ''}`}>
                                            <p className="label">Not sure</p>
                                            <div className="specifics__item 4" role="button" onClick={(event) => this.handleSpecific(event, "Something 1")}>
                                                <span className="checkbox"></span>
                                                <p>Something 1</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="button button--primary button--next button--disabled" ref={this.secondButton} onClick={(event) => this.handleSteps(event)}>Go to the next step</a>
                                </div>
                                <div className="step">
                                    <p className="label">Step 3/4</p>
                                    <h1>Please tell us more about yourself</h1>
                                    <SignUpForm/>
                                </div>
                                <div className="step">
                                    <p className="label">Step 4/4</p>
                                    <h1>Thank you, <span className="customer-name"></span>!</h1>
                                    <p>We’ll get in touch with you to learn more about your startup and discuss details within 48 hours.</p>
                                    <div className="sign-up__contact">
                                        <a className="email-box" href="mailto:help@mbs.com">
                                            <span></span>help@mbs.com
                                        </a>
                                        <a className="phone-box" href="tel:0207 946 0496">
                                            <span></span>0207 946 0496
                                        </a>
                                    </div>
                                    <Link to="/" className="button button--secondary">Go to home page</Link>
                                </div>
                            </div>
                            <div className="sign-up__benefits">
                                <ul>
                                    <li>Our consultant will call you back within 48 hours</li>
                                    <li>We’ll help you find any other areas for improvement</li>
                                    <li>Pick staff roles & discuss specific requirements with us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}