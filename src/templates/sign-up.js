import React, { Component } from "react"
import SignUpForm from "../components/signUpForm"

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

	handleService = (event, name) => {
        let element = event.currentTarget
        let isAnyServiceActive = false

		let services = document.getElementsByClassName('ginput_container_multiselect')
		let service = services[0].querySelectorAll(`option[value="${name}"]`)
		service[0].selected === false ? service[0].selected = true : service[0].selected = false

        if (element.classList.contains('active')) {
            element.classList.remove('active')
            this.setState({[name]: false})
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
    }

    componentDidUpdate() {
        this.state.isAnyServiceActive ? this.firstButton.current.classList.remove('button--disabled') : this.firstButton.current.classList.add('button--disabled')
        this.state.isAnySpecificActive ? this.secondButton.current.classList.remove('button--disabled') : this.secondButton.current.classList.add('button--disabled')
    }

	render() {
        return (
            <div className="container__wrapper">
                <div className="container">
                    <div className="sign-up sign-up--multistep">
                        <div className="sign-up__navigation">
                            <div className="sign-up__breadcrumbs">
                                <div className="breadcrumb active" role="button" onClick={(event) => this.handleBreadcrumb(event, 0)}>
                                    <span>1</span>
                                    <p>Services</p>
                                </div>
                                <div className="breadcrumb" role="button" onClick={(event) => this.handleBreadcrumb(event, 1)}>
                                    <span>2</span>
                                    <p>Requirements</p>
                                </div>
                                <div className="breadcrumb" role="button" onClick={(event) => this.handleBreadcrumb(event, 2)}>
                                    <span>3</span>
                                    <p>Contact details</p>
                                </div>
                                <div className="breadcrumb" role="button" onClick={(event) => this.handleBreadcrumb(event, 3)}>
                                    <span>4</span>
                                    <p>Confirmation</p>
                                </div>
                            </div>
                            <div className="sign-up__perks">

                            </div>
                        </div>
                        <div className="sign-up__content">
                            <div className="step visible">
                                <div className="sign-up__grid services">
                                    <div className="services__item" onClick={(event) => this.handleService(event, "Accounting")}>
										<span className="checkbox"></span>
                                        <span>Accounting</span>
                                    </div>
                                    <div className="services__item" onClick={(event) => this.handleService(event, "Administration & support")}>
										<span className="checkbox"></span>
                                        <span>Administration and support</span>
                                    </div>
                                    <div className="services__item" onClick={(event) => this.handleService(event, "Compliance management")}>
										<span className="checkbox"></span>
                                        <span>Compliance management</span>
                                    </div>
                                    <div className="services__item" onClick={(event) => this.handleService(event, "Risk assessment")}>
										<span className="checkbox"></span>
                                        <span>Risk assessment</span>
                                    </div>
                                    <div className="services__item" onClick={(event) => this.handleService(event, "Not sure")}>
										<span className="checkbox"></span>
                                        <span>Not sure</span>
                                    </div>
                                </div>
                                <a href="#" className="button button--primary button--next button--disabled" ref={this.firstButton} onClick={(event) => this.handleSteps(event)}>Next step</a>
                            </div>
                            <div className="step">
                                <div className={`specifics__service${this.state["Accounting"] === true ? ' visible' : ''}`}>
                                    <div className="specifics__item" role="button" onClick={(event) => this.handleSpecific(event, "Accounts & tax")}>
										<span className="checkbox"></span>
                                        <span>Accounts & tax</span>
                                    </div>
									<div className="specifics__item" role="button" onClick={(event) => this.handleSpecific(event, "Payroll")}>
										<span className="checkbox"></span>
                                        <span>Payroll</span>
                                    </div>
									<div className="specifics__item" role="button" onClick={(event) => this.handleSpecific(event, "VAT returns")}>
										<span className="checkbox"></span>
                                        <span>VAT returns</span>
                                    </div>
                                </div>
                                <div className={`specifics__service${this.state["Administration & support"] === true ? ' visible' : ''}`}>
									<div className="specifics__item" role="button" onClick={(event) => this.handleSpecific(event, "Administration 1")}>
										<span className="checkbox"></span>
                                        <span>Administration 1</span>
                                    </div>
                                </div>
                                <div className={`specifics__service${this.state["Compliance management"] === true ? ' visible' : ''}`}>
									<div className="specifics__item" role="button" onClick={(event) => this.handleSpecific(event, "Subservice 1")}>
										<span className="checkbox"></span>
                                        <span>Subservice 1</span>
                                    </div>
									<div className="specifics__item" role="button" onClick={(event) => this.handleSpecific(event, "Subservice 2")}>
										<span className="checkbox"></span>
                                        <span>Subservice 2</span>
                                    </div>
									<div className="specifics__item" role="button" onClick={(event) => this.handleSpecific(event, "Subservice 3")}>
										<span className="checkbox"></span>
                                        <span>Subservice 3</span>
                                    </div>
									<div className="specifics__item" role="button" onClick={(event) => this.handleSpecific(event, "Subservice 4")}>
										<span className="checkbox"></span>
                                        <span>Subservice 4</span>
                                    </div>
									<div className="specifics__item" role="button" onClick={(event) => this.handleSpecific(event, "Subservice 5")}>
										<span className="checkbox"></span>
                                        <span>Subservice 5</span>
                                    </div>
                                </div>
                                <div className={`specifics__service${this.state["Risk assessment"] === true ? ' visible' : ''}`}>
									<div className="specifics__item" role="button" onClick={(event) => this.handleSpecific(event, "Compliance 1")}>
										<span className="checkbox"></span>
                                        <span>Compliance 1</span>
                                    </div>
                                </div>
                                <div className={`specifics__service${this.state["Not sure"] === true ? ' visible' : ''}`}>
									<div className="specifics__item" role="button" onClick={(event) => this.handleSpecific(event, "Something 1")}>
										<span className="checkbox"></span>
                                        <span>Something 1</span>
                                    </div>
                                </div>
                                <a href="#" className="button button--primary button--next button--disabled" ref={this.secondButton} onClick={(event) => this.handleSteps(event)}>Next step</a>
                            </div>
                            <div className="step">
                                <SignUpForm/>
                            </div>
                            <div className="step">
                                <p>Thanks for your submission, <span class="customer-name"></span>!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}