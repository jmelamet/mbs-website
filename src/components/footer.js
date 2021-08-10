import React, { Component } from "react"
import { graphql, StaticQuery, Link } from "gatsby"

export default class Navigation extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <>
                <StaticQuery
                    query={graphql`
                        query {
                            firstColumn: wpMenu(name: { eq: "Footer - About" }) {
                                menuItems {
                                    nodes {
                                        id
                                        label
                                        path
                                    }
                                }
                            }
                            secondColumn: wpMenu(name: { eq: "Footer - Contact" }) {
                                menuItems {
                                    nodes {
                                        id
                                        label
                                        path
                                    }
                                }
                            }
                            thirdColumn: wpMenu(name: { eq: "Footer - Legal" }) {
                                menuItems {
                                    nodes {
                                        id
                                        label
                                        path
                                    }
                                }
                            }
                            fourthColumn: wpMenu(name: { eq: "Footer - Services" }) {
                                menuItems {
                                    nodes {
                                        id
                                        label
                                        path
                                    }
                                }
                            }
                            fifthColumn: wpMenu(name: { eq: "Footer - Social" }) {
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
                        <footer className="footer">
                            <div className="footer__container">
                                <div className="footer__metronome">
                                    <Link to="/" className="logo"> </Link>
                                    <p>© {new Date().getFullYear()} Metronome Business Solutions</p>
                                </div>
                                <div className="footer__first">
                                    {data.firstColumn.menuItems.nodes.map((menuItem, index = 0) => {
                                        if (index === 0) {
                                            return (
                                                <span key={menuItem.id} className="footer__label">{menuItem.label}</span>
                                            )
                                        } else {
                                            return (
                                                <Link to={menuItem.path} key={menuItem.id} className="footer__link">{menuItem.label}</Link>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="footer__second">
                                    {data.secondColumn.menuItems.nodes.map((menuItem, index = 0) => {
                                        if (index === 0) {
                                            return (
                                                <span key={menuItem.id} className="footer__label">{menuItem.label}</span>
                                            )
                                        } else {
                                            return (
                                                <Link to={menuItem.path} key={menuItem.id} className="footer__link">{menuItem.label}</Link>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="footer__third">
                                    {data.thirdColumn.menuItems.nodes.map((menuItem, index = 0) => {
                                        if (index === 0) {
                                            return (
                                                <span key={menuItem.id} className="footer__label">{menuItem.label}</span>
                                            )
                                        } else {
                                            return (
                                                <Link to={menuItem.path} key={menuItem.id} className="footer__link">{menuItem.label}</Link>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="footer__fourth">
                                    {data.fourthColumn.menuItems.nodes.map((menuItem, index = 0) => {
                                        if (index === 0) {
                                            return (
                                                <span key={menuItem.id} className="footer__label">{menuItem.label}</span>
                                            )
                                        } else {
                                            return (
                                                <a href={menuItem.path} key={menuItem.id} className="footer__link">{menuItem.label}</a>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="footer__fifth">
                                    {data.fifthColumn.menuItems.nodes.map((menuItem, index = 0) => {
                                        if (index === 0) {
                                            return (
                                                <span key={menuItem.id} className="footer__label">{menuItem.label}</span>
                                            )
                                        } else {
                                            return (
                                                <a href={menuItem.path} target="_blank" rel="noreferrer" key={menuItem.id} className="footer__link">{menuItem.label}</a>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                        </footer>
                    )}
                />
            </>
        )
    }
}