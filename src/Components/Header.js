import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
export class Header extends Component {
    container = React.createRef();
    constructor() {
        super();
        this.state = {
            clickedOutside: false,
           
            open: false,
        }
    }
    componentDidMount() {

        document.addEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                open: false,
               
            });
        }
    };
    handleButtonClick = () => {
        this.setState(state => {
            return {
                open: !state.open,
            };
        });
    };

    toogling = (e) => {
        let target_ = e.target;
        document.querySelectorAll(".menu-icon").forEach((item, index) => {
            if (target_.getAttribute("class") === item.getAttribute("class")) {
                document.body.classList.toggle('open-toggle');
            }
            document.getElementById("menu-toggle").checked = false
        });
    }
    removeToogling = (e) => {

        document.body.classList.remove('open-toggle');


    }
    handleClickInside = () => this.setState({ clickedOutside: false });

    render() {
        return (
            <div>
                <header className="header-main">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-12 header-wrap">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={logo} className="App-logo" alt="logo" />
                                    </Link>
                                </div>
                                <div className="header-navigation">
                                    <div className="menu-icon" onClick={(e) => this.toogling(e)}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="navigation-wrap">
                                        <div className="site-navigation">
                                            <nav>
                                                <ul>
                                                    <li onClick={(e) => this.removeToogling(e)}><Link to="/faq">FAQs</Link></li>
                                                    <li onClick={(e) => this.removeToogling(e)}><Link to="/support">Support</Link></li>
                                                    <li onClick={(e) => this.removeToogling(e)}><Link to="/history">History</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="lang-dropdown" ref={this.container}>
                                            <div className="lang-label">
                                                <input type="checkbox" id="menu-toggle" onClick={this.handleButtonClick} />
                                                <label htmlFor="menu-toggle"  >English</label>
                                                {this.state.open && (
                                                    <div className="lang-list">
                                                        <ul>
                                                            <li>
                                                                <a href="#">French</a>
                                                            </li>
                                                            <li>
                                                                {/* <a href="#">German</a> */}
                                                                <Link to="/ger/home">German</Link>

                                                            </li>
                                                            <li>
                                                                <a href="#">Spanish</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Arabic</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}


