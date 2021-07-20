import React, { Component } from "react"
import SignUpForm from "../components/signUpForm"

export default class SignUp extends Component {
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
                                    <label htmlFor="accounting" className="input__wrapper">
                                        <input type="checkbox" name="accounting" id="accounting"/>
                                        <span>Accounting</span>
                                    </label>
                                    <label htmlFor="administration-and-support" className="input__wrapper">
                                        <input type="checkbox" name="administration-and-support" id="administration-and-support"/>
                                        <span>Administration and support</span>
                                    </label>
                                    <label htmlFor="compliance-management" className="input__wrapper">
                                        <input type="checkbox" name="compliance-management" id="compliance-management"/>
                                        <span>Compliance management</span>
                                    </label>
                                    <label htmlFor="risk-assessment" className="input__wrapper">
                                        <input type="checkbox" name="risk-assessment" id="risk-assessment"/>
                                        <span>Risk assessment</span>
                                    </label>
                                    <label htmlFor="not-sure" className="input__wrapper">
                                        <input type="checkbox" name="not-sure" id="not-sure"/>
                                        <span>Not sure</span>
                                    </label>
                                </div>
                                <a href="#" className="button button--primary button--next button--disabled">Next step</a>
                            </div>
                            <div className="step specifics">
                                <div className="specifics__service" id="accounting">
                                    <label htmlFor="payroll-1" className="input__wrapper">
                                        <input type="checkbox" name="payroll-1" id="payroll-1"/>
                                        <span>Accounting - Payroll</span>
                                    </label>
                                </div>
                                <div className="specifics__service" id="administration-and-support">
                                    <label htmlFor="payroll-2" className="input__wrapper">
                                        <input type="checkbox" name="payroll-2" id="payroll-2"/>
                                        <span>Administration and support - Payroll</span>
                                    </label>
                                </div>
                                <div className="specifics__service" id="compliance-management">
                                    <label htmlFor="payroll-3" className="input__wrapper">
                                        <input type="checkbox" name="payroll-3" id="payroll-3"/>
                                        <span>Compliance management - Payroll</span>
                                    </label>
                                </div>
                                <div className="specifics__service" id="risk-assessment">
                                    <label htmlFor="payroll-4" className="input__wrapper">
                                        <input type="checkbox" name="payroll-4" id="payroll-4"/>
                                        <span>Risk assessment- Payroll</span>
                                    </label>
                                </div>
                                <div className="specifics__service" id="not-sure">
                                    <label htmlFor="payroll-5" className="input__wrapper">
                                        <input type="checkbox" name="payroll-5" id="payroll-5"/>
                                        <span>Not sure - Payroll</span>
                                    </label>
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