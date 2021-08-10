import React, { Component } from "react"

export default class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="table">
                    <div className="table__head">
                        <div></div>
                        <div className="metronome"><p>Metronome Business Solutions</p><span></span></div>
                        <div><p>Rest</p></div>
                    </div>
                    <div className="table__row">
                        <div className="heading"><p>Validated partners</p></div>
                        <div><span className="table__check"></span></div>
                        <div><span className="table__cross"></span></div>
                    </div>
                    <div className="table__row">
                        <div className="heading"><p>Payment model</p></div>
                        <div>Pay as you grow</div>
                        <div>Recurring fixed cost</div>
                    </div>
                    <div className="table__row">
                        <div className="heading"><p>Upfront fees</p></div>
                        <div>£0</div>
                        <div>£100+</div>
                    </div>
                    <div className="table__row">
                        <div className="heading"><p>Engagement type</p></div>
                        <div>Personalised assistance</div>
                        <div>DIY approach</div>
                    </div>
                    <div className="table__row">
                        <div className="heading"><p>Contract length</p></div>
                        <div>Flexible</div>
                        <div>Long, binding contracts</div>
                    </div>
                    <div className="table__row">
                        <div className="heading"><p>Flexibility</p></div>
                        <div>Add or remove services</div>
                        <div>One size fits all packages</div>
                    </div>
                    <div className="table__row">
                        <div className="heading"><p>Scalability</p></div>
                        <div><span className="table__check"></span></div>
                        <div><span className="table__cross"></span></div>
                    </div>
                    <div className="table__row">
                        <div className="heading"><p>Turnaround</p></div>
                        <div>Within 2 weeks</div>
                        <div>Up to 8 weeks</div>
                    </div>
                    <div className="table__row">
                        <div className="heading"><p>Risk</p></div>
                        <div>Low</div>
                        <div>High</div>
                    </div>
                    <div className="table__row">
                        <div className="heading"><p>Support</p></div>
                        <div>24/7 and a support hub</div>
                        <div>Support hub</div>
                    </div>
                </div>
            </>
        )
    }
}