import React, { Component } from "react"
import parse from 'html-react-parser'
import Usp from '../components/usp'

export default class Hero extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.handleTooltip = this.handleTooltip.bind(this)
    }

    handleTooltip = (event) => {
        let tooltip = event.currentTarget.parentNode.getElementsByClassName('tooltip')
        tooltip[0].classList.contains('visible') ? tooltip[0].classList.remove('visible') : tooltip[0].classList.add('visible')
	}

    render() {
        const data = this.props.data
        const attributes = JSON.parse(data.attributesJSON)

        return (
            <>
                {attributes.variant === 'plain' ?
                    <div className="hero-banner hero-banner--plain">
                        <div className="hero-banner__inner">
                            <div className="hero-banner__text">
                                {data.innerBlocks.map((block) => {
                                    // if (block.name === 'nerdcow/usp') {
                                    //     return (
                                    //         <Usp data={block} key={`${block.name}_${block.order}`}/>
                                    //     )
                                    // } else {
                                        return (
                                            <div key={`${block.name}_${block.order}`}>
                                                <div>{parse(block.saveContent)}</div>
                                            </div>
                                        )
                                    // }
                                })}
                            </div>
                        </div>
                    </div>
                :
                    <div className={`hero-banner ${attributes.variant === 'service' ? 'hero-banner--service' : ''}`}>
                        <div className="hero-banner__inner">
                            <div className="hero-banner__text">
                                {data.innerBlocks.map((block) => {
                                    if (block.name === 'nerdcow/usp') {
                                        return (
                                            <Usp data={block} key={`${block.name}_${block.order}`}/>
                                        )
                                    } else {
                                        return (
                                            <div key={`${block.name}_${block.order}`}>
                                                <div>{parse(block.saveContent)}</div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            <div className="hero-banner__images">
                                <div className="hero-image hero-image--first">
                                    <div className="hero-image__photo-wrapper">
                                        <div className="hero-image__photo" style={{backgroundImage: `url(${attributes.firstImage})`}}></div>
                                    </div>
                                    {attributes.isFirstActive &&
                                        <div className="hero-image__tooltip">
                                            <div className="tooltip-dot" onClick={(event) => this.handleTooltip(event)}></div>
                                            <div className="tooltip">
                                                <div className="tooltip__heading">
                                                    <span className="tooltip__quotation-marks"></span>
                                                    <span className="tooltip__stars"></span>
                                                </div>
                                                <p className="tooltip__description">{attributes.firstDescription}</p>
                                                <p className="tooltip__name">{attributes.firstName}</p>
                                                <p className="tooltip__company-name">{attributes.firstCompanyName}</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="hero-image hero-image--second">
                                    <div className="hero-image__photo-wrapper">
                                        <div className="hero-image__photo" style={{backgroundImage: `url(${attributes.secondImage})`}}></div>
                                    </div>
                                    {attributes.isSecondActive &&
                                        <div className="hero-image__tooltip">
                                            <div className="tooltip-dot" onClick={(event) => this.handleTooltip(event)}></div>
                                            <div className="tooltip">
                                                <div className="tooltip__heading">
                                                    <span className="tooltip__quotation-marks"></span>
                                                    <span className="tooltip__stars"></span>
                                                </div>
                                                <p className="tooltip__description">{attributes.secondDescription}</p>
                                                <p className="tooltip__name">{attributes.secondName}</p>
                                                <p className="tooltip__company-name">{attributes.secondCompanyName}</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="hero-image hero-image--third">
                                    <div className="hero-image__photo-wrapper">
                                        <div className="hero-image__photo" style={{backgroundImage: `url(${attributes.thirdImage})`}}></div>
                                    </div>
                                    {attributes.isThirdActive &&
                                        <div className="hero-image__tooltip">
                                            <div className="tooltip-dot" onClick={(event) => this.handleTooltip(event)}></div>
                                            <div className="tooltip">
                                                <div className="tooltip__heading">
                                                    <span className="tooltip__quotation-marks"></span>
                                                    <span className="tooltip__stars"></span>
                                                </div>
                                                <p className="tooltip__description">{attributes.thirdDescription}</p>
                                                <p className="tooltip__name">{attributes.thirdName}</p>
                                                <p className="tooltip__company-name">{attributes.thirdCompanyName}</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </>
        )
    }
}