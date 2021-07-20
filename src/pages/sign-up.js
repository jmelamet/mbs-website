import React, { Component } from "react"
import SignUpForm from "../components/signUpForm"

export default class SignUp extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}

		this.handleService = this.handleService.bind(this)
	}

	handleService = (event, name) => {
		event.target.checked ? this.setState({[name]: true}) : this.setState({[name]: false})
		let services = document.getElementsByClassName('ginput_container_multiselect')
		let service = services[0].querySelectorAll(`option[value="${name}"]`)
		service[0].selected === false ? service[0].selected = true : service[0].selected = false
	}

	render() {
        return (
            <div className="container__wrapper">
                <div className="container">
                    <div className="sign-up sign-up--multistep">
                        <div className="sign-up__navigation">
                            <div className="sign-up__breadcrumbs">
                                <div className="breadcrumb active">
                                    <span>1</span>
                                    <p>Services</p>
                                </div>
                                <div className="breadcrumb">
                                    <span>2</span>
                                    <p>Requirements</p>
                                </div>
                                <div className="breadcrumb">
                                    <span>3</span>
                                    <p>Contact details</p>
                                </div>
                                <div className="breadcrumb">
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
                                    <div className="services__item" onClick={(event) => this.handleService(event, "Accouting")}>
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
                                <a href="#" className="button button--primary button--next button--disabled">Next step</a>
                            </div>
                            <div className="step specifics">
                                <div className="specifics__service">
                                    <div className="specifics__item" role="button" onClick={(event) => this.handleService(event, "Accounts & tax")}>
										<span className="checkbox"></span>
                                        <span>Accounts & tax</span>
                                    </div>
									<div className="specifics__item" role="button" onClick={(event) => this.handleService(event, "Payroll")}>
										<span className="checkbox"></span>
                                        <span>Payroll</span>
                                    </div>
									<div className="specifics__item" role="button" onClick={(event) => this.handleService(event, "VAT returns")}>
										<span className="checkbox"></span>
                                        <span>VAT returns</span>
                                    </div>
                                </div>
                                <div className="specifics__service">
									<div className="specifics__item" role="button" onClick={(event) => this.handleService(event, "Administration 1")}>
										<span className="checkbox"></span>
                                        <span>Administration 1</span>
                                    </div>
                                </div>
                                <div className="specifics__service" id="compliance-management">
									<div className="specifics__item" role="button" onClick={(event) => this.handleService(event, "Subservice 1")}>
										<span className="checkbox"></span>
                                        <span>Subservice 1</span>
                                    </div>
									<div className="specifics__item" role="button" onClick={(event) => this.handleService(event, "Subservice 2")}>
										<span className="checkbox"></span>
                                        <span>Subservice 2</span>
                                    </div>
									<div className="specifics__item" role="button" onClick={(event) => this.handleService(event, "Subservice 3")}>
										<span className="checkbox"></span>
                                        <span>Subservice 3</span>
                                    </div>
									<div className="specifics__item" role="button" onClick={(event) => this.handleService(event, "Subservice 4")}>
										<span className="checkbox"></span>
                                        <span>Subservice 4</span>
                                    </div>
									<div className="specifics__item" role="button" onClick={(event) => this.handleService(event, "Subservice 5")}>
										<span className="checkbox"></span>
                                        <span>Subservice 5</span>
                                    </div>
                                </div>
                                <div className="specifics__service">
									<div className="specifics__item" role="button" onClick={(event) => this.handleService(event, "Compliance 1")}>
										<span className="checkbox"></span>
                                        <span>Compliance 1</span>
                                    </div>
                                </div>
                                <div className="specifics__service">
									<div className="specifics__item" role="button" onClick={(event) => this.handleService(event, "Something 1")}>
										<span className="checkbox"></span>
                                        <span>Something 1</span>
                                    </div>
                                </div>
                                <a href="#" className="button button--primary button--next button--disabled">Next step</a>
                            </div>
                            <div className="step">
                                <SignUpForm/>
                            </div>
                            <div className="step">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}