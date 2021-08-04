import React, { Component } from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import informationIcon from "../assets/images/information-icon.svg"

export default class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            hasScrolled: false,
            isMegaMenuOpen: false
        }

        this.serviceButton = React.createRef()
        this.megaMenu = React.createRef()
        this.hamburger = React.createRef()
        this.primaryMobileNavigation = React.createRef()
        this.secondaryMobileNavigation = React.createRef()
        this.overlay = React.createRef()
        this.desktopOverlay = React.createRef()

        this.handleServices = this.handleServices.bind(this)
        this.handleMobileServices = this.handleMobileServices.bind(this)
        this.handleMobileNavigation = this.handleMobileNavigation.bind(this)
        this.trackScrolling = this.trackScrolling.bind(this)
    }

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }
      
    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        if (window.pageYOffset < 20) {
            this.setState({
                hasScrolled: false
            })
        } else {
            this.setState({
                hasScrolled: true
            })
        }
    }

    handleServices = () => {
        const serviceButton = this.serviceButton.current
        const megaMenu = this.megaMenu.current
        const desktopOverlay = this.desktopOverlay.current
        const container = document.getElementsByClassName('container__wrapper')

        if (serviceButton.classList.contains('clicked')) {
            this.setState({
                isMegaMenuOpen: false
            })
            megaMenu.classList.remove('visible')
            desktopOverlay.classList.remove('visible')
            container[0].classList.remove('blurred')
            serviceButton.classList.remove('clicked')
        } else {
            this.setState({
                isMegaMenuOpen: true
            })
            megaMenu.classList.add('visible')
            desktopOverlay.classList.add('visible')
            container[0].classList.add('blurred')
            serviceButton.classList.add('clicked')
        }
    }

    handleMobileServices = (event) => {
        const primaryMobileNavigation = this.primaryMobileNavigation.current
        const secondaryMobileNavigation = this.secondaryMobileNavigation.current

        if (event.currentTarget.classList.contains('behind') || event.currentTarget.classList.contains('mobile-menu__back')) {
            primaryMobileNavigation.classList.remove('behind')
            secondaryMobileNavigation.classList.remove('visible')
        } else {
            primaryMobileNavigation.classList.add('behind')
            secondaryMobileNavigation.classList.add('visible')
        }
    }

    handleMobileNavigation = () => {
        const hamburger = this.hamburger.current
        const primaryMobileNavigation = this.primaryMobileNavigation.current
        const secondaryMobileNavigation = this.secondaryMobileNavigation.current
        const overlay = this.overlay.current
        const container = document.getElementsByClassName('container__wrapper')

        if (hamburger.classList.contains('clicked')) {
            primaryMobileNavigation.classList.remove('visible')
            primaryMobileNavigation.classList.remove('behind')
            secondaryMobileNavigation.classList.remove('visible')
            overlay.classList.remove('visible')
            container[0].classList.remove('blurred')
            hamburger.classList.remove('clicked')
        } else {
            primaryMobileNavigation.classList.add('visible')
            overlay.classList.add('visible')
            container[0].classList.add('blurred')
            hamburger.classList.add('clicked')
        }
    }

    render() {
        const state = this.state

        return (
            <>
                <StaticQuery
                    query={graphql`
                        query {
                            primary: wpMenu(locations: { eq: PRIMARY_NAVIGATION }) {
                                menuItems {
                                    nodes {
                                        id
                                        label
                                        path
                                    }
                                }
                            }
                            servicesFirstColumn: wpMenu(locations: { eq: FIRST_COLUMN_NAVIGATION }) {
                                menuItems {
                                    nodes {
                                        id
                                        label
                                        path
                                    }
                                }
                            }
                            servicesSecondColumn: wpMenu(locations: { eq: SECOND_COLUMN_NAVIGATION }) {
                                menuItems {
                                    nodes {
                                        id
                                        label
                                        path
                                    }
                                }
                            }
                            servicesThirdColumn: wpMenu(locations: { eq: THIRD_COLUMN_NAVIGATION }) {
                                menuItems {
                                    nodes {
                                        id
                                        label
                                        path
                                    }
                                }
                            }
                            servicesFourthColumn: wpMenu(locations: { eq: FOURTH_COLUMN_NAVIGATION }) {
                                menuItems {
                                    nodes {
                                        id
                                        label
                                        path
                                    }
                                }
                            }
                        }
                    `}
                    render={data => (
                        <>
                            <div className={`navigation ${state.hasScrolled ? "navigation--scrolled" : ""} ${state.isMegaMenuOpen ? "navigation--mega-menu" : ""}`}>
                                <div className="navigation__container">
                                    <Link to="/" className="navigation__logo"> </Link>
                                    <div className="navigation__items">
                                        {data.primary.menuItems.nodes.map((menuItem) => {
                                            if (menuItem.label === "Services") {
                                                return (
                                                    <span key={menuItem.id} className="navigation__item navigation__services" ref={this.serviceButton} onClick={() => this.handleServices()}>{menuItem.label}</span>
                                                )
                                            } else {
                                                return (
                                                    <Link to={menuItem.path} key={menuItem.id} className="navigation__item" activeClassName="active">{menuItem.label}</Link>
                                                )

                                            }
                                        })}
                                    </div>
                                    <Link to="/sign-up/" className="button button--primary">Book a consultation</Link>
                                </div>
                            </div>
                            <div className="mobile-navigation">
                                <Link to="/" className="mobile-navigation__logo"> </Link>
                                <div className="hamburger__wrapper" onClick={() => this.handleMobileNavigation()} ref={this.hamburger}>
                                    <div className="hamburger">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="mega-menu" ref={this.megaMenu}>
                                <div className="mega-menu__container">
                                    <div className="mega-menu__about">
                                        <h1><span>Mix & match</span><br></br>services</h1>
                                        <p>Book a consultation to review your requirements and create the perfect profile of your future team members.</p>
                                        <Link to="/sign-up/" className="button button--primary">Book a consultation</Link>
                                    </div>
                                    <div className="mega-menu__navigation">
                                        <div className="mega-menu__ctas">
                                            <h2><span>Everything</span> you need to grow a startup</h2>
                                            <a href="tel:0207 946 0496" className="info-box">
                                                <img src={informationIcon}/>
                                                <p><span>Questions?</span> 0207 946 0496</p>
                                            </a>
                                        </div>
                                        <div className="mega-menu__services">
                                            <div className="mega-menu__category">
                                                {data.servicesFirstColumn.menuItems.nodes.map((menuItem, index = 0) => {
                                                    if (index === 0) {
                                                        return (
                                                            <span key={menuItem.id} className="mega-menu__item mega-menu__label" ref={this.servicesButton}>{menuItem.label}</span>
                                                        )
                                                    } else {
                                                        return (
                                                            <Link to={menuItem.path} key={menuItem.id} className="mega-menu__item" activeClassName="active">{menuItem.label}</Link>
                                                        )
                                                    }
                                                })}
                                            </div>
                                            <div className="mega-menu__category">
                                                {data.servicesSecondColumn.menuItems.nodes.map((menuItem, index = 0) => {
                                                    if (index === 0) {
                                                        return (
                                                            <span key={menuItem.id} className="mega-menu__item mega-menu__label" ref={this.servicesButton}>{menuItem.label}</span>
                                                        )
                                                    } else {
                                                        return (
                                                            <Link to={menuItem.path} key={menuItem.id} className="mega-menu__item" activeClassName="active">{menuItem.label}</Link>
                                                        )
                                                    }
                                                })}
                                            </div>
                                            <div className="mega-menu__category">
                                                {data.servicesThirdColumn.menuItems.nodes.map((menuItem, index = 0) => {
                                                    if (index === 0) {
                                                        return (
                                                            <span key={menuItem.id} className="mega-menu__item mega-menu__label" ref={this.servicesButton}>{menuItem.label}</span>
                                                        )
                                                    } else {
                                                        return (
                                                            <Link to={menuItem.path} key={menuItem.id} className="mega-menu__item" activeClassName="active">{menuItem.label}</Link>
                                                        )
                                                    }
                                                })}
                                            </div>
                                            <div className="mega-menu__category">
                                                {data.servicesFourthColumn.menuItems.nodes.map((menuItem, index = 0) => {
                                                    if (index === 0) {
                                                        return (
                                                            <span key={menuItem.id} className="mega-menu__item mega-menu__label" ref={this.servicesButton}>{menuItem.label}</span>
                                                        )
                                                    } else {
                                                        return (
                                                            <Link to={menuItem.path} key={menuItem.id} className="mega-menu__item" activeClassName="active">{menuItem.label}</Link>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="desktop__overlay" ref={this.desktopOverlay} onClick={() => this.handleServices()}></div>
                            <div className="mobile-menu">
                                <div className="mobile-menu__primary" ref={this.primaryMobileNavigation}>
                                    <Link to="/" className="mobile-menu__logo"> </Link>
                                    <div className="mobile-menu__navigation">
                                        {data.primary.menuItems.nodes.map((menuItem) => {
                                            if (menuItem.label === "Services") {
                                                return (
                                                    <span key={menuItem.id} className="mobile-menu__item" onClick={(event) => this.handleMobileServices(event)}>{menuItem.label}</span>
                                                )
                                            } else {
                                                return (
                                                    <Link to={menuItem.path} key={menuItem.id} className="mobile-menu__item" activeClassName="active">{menuItem.label}</Link>
                                                )

                                            }
                                        })}
                                    </div>
                                    <div className="mobile-menu__about">
                                        <a href="tel:0207 946 0496" className="info-box">
                                            <img src={informationIcon}/>
                                            <p><span>Questions?</span> 0207 946 0496</p>
                                        </a>
                                        <Link to="/sign-up/" className="button button--primary">Book a consultation</Link>
                                        <ul>
                                            <li>Our consultant will call you back within 48 hours</li>
                                            <li>We’ll help you find any other areas for improvement</li>
                                            <li>Pick staff roles & discuss specific requirements with us</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mobile-menu__services" ref={this.secondaryMobileNavigation}>
                                    <Link to="/" className="mobile-menu__logo"> </Link>
                                    <div className="mobile-menu__navigation">
                                        <div className="mobile-menu__back" role="button" onClick={(event) => this.handleMobileServices(event)}>
                                            <span></span>
                                        </div>
                                        <div className="mobile-menu__category">
                                            {data.servicesFirstColumn.menuItems.nodes.map((menuItem, index = 0) => {
                                                if (index === 0) {
                                                    return (
                                                        <span key={menuItem.id} className="mobile-menu__item mobile-menu__label" ref={this.servicesButton}>{menuItem.label}</span>
                                                    )
                                                } else {
                                                    return (
                                                        <Link to={menuItem.path} key={menuItem.id} className="mobile-menu__item" activeClassName="active">{menuItem.label}</Link>
                                                    )
                                                }
                                            })}
                                        </div>
                                        <div className="mobile-menu__category">
                                            {data.servicesSecondColumn.menuItems.nodes.map((menuItem, index = 0) => {
                                                if (index === 0) {
                                                    return (
                                                        <span key={menuItem.id} className="mobile-menu__item mobile-menu__label" ref={this.servicesButton}>{menuItem.label}</span>
                                                    )
                                                } else {
                                                    return (
                                                        <Link to={menuItem.path} key={menuItem.id} className="mobile-menu__item" activeClassName="active">{menuItem.label}</Link>
                                                    )
                                                }
                                            })}
                                        </div>
                                        <div className="mobile-menu__category">
                                            {data.servicesThirdColumn.menuItems.nodes.map((menuItem, index = 0) => {
                                                if (index === 0) {
                                                    return (
                                                        <span key={menuItem.id} className="mobile-menu__item mobile-menu__label" ref={this.servicesButton}>{menuItem.label}</span>
                                                    )
                                                } else {
                                                    return (
                                                        <Link to={menuItem.path} key={menuItem.id} className="mobile-menu__item" activeClassName="active">{menuItem.label}</Link>
                                                    )
                                                }
                                            })}
                                        </div>
                                        <div className="mobile-menu__category">
                                            {data.servicesFourthColumn.menuItems.nodes.map((menuItem, index = 0) => {
                                                if (index === 0) {
                                                    return (
                                                        <span key={menuItem.id} className="mobile-menu__item mobile-menu__label" ref={this.servicesButton}>{menuItem.label}</span>
                                                    )
                                                } else {
                                                    return (
                                                        <Link to={menuItem.path} key={menuItem.id} className="mobile-menu__item" activeClassName="active">{menuItem.label}</Link>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-menu__overlay" ref={this.overlay} onClick={() => this.handleMobileNavigation()}></div>
                        </>
                    )}
                />
            </>
        )
    }
}