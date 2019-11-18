import React, { Component } from 'react';
import { GerHeader } from '../German-Components/Header';
import { Footer } from '../German-Components/Footer';
class Accordion extends Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize)

        this._handleClick();
    }


    _handleClick() {
        let acc = this._acc.getElementsByClassName('accordian-title');
        for (let i = 0; i < acc.length; i++) {
            let a = acc[i];
            a.onclick = () => a.classList.toggle("active");
        }
    }

    render() {
        return (
            <div
                ref={a => this._acc = a}
                onClick={this._handleClick}>
                {this.props.children}
            </div>
        )
    }
}

export class German_Faq extends Component {

    constructor(props) {
        super(props);
        this.state = {
            block1: true,
            block2: false,
            block3: false,
        };
    }

    toggle = (index) => () => {
        this.setState({ [`block${index}`]: !this.state[`block${index}`] });
    }

    toggleExpand = (expand = false) => () => {
        this.setState({
            block1: expand,
            block2: expand,
            block3: expand,
        });
    }


    render() {
        return (
            <div>
                <GerHeader />
                <section className="inner-banner">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-xl-9">
                                <h1>Have a question about CamAPS FX?</h1>
                                <p>Here are the answers to some of your frequently asked questions.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="faq-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <Accordion>
                                    <div className="accordian-col">
                                        <div className="accordian-title"><h4>What is CamAPS FX?</h4></div>
                                        <div className="accordian-content">
                                            <p>CamAPS FX is an Android app to manage glucose levels in people with type 1 diabetes, aged one year and older, using a hybrid closed-loop approach.</p>
                                            <p>Additional age restrictions may apply depending on your chosen Continuous Glucoe Monitor or insulin pump.</p>
                                        </div>
                                    </div>

                                    <div className="accordian-col">
                                        <div className="accordian-title"><h4>Is CamAPS FX approved for use?</h4></div>
                                        <div className="accordian-content">
                                            <p>The CamAPS FX app has been extensively tested in clinical trials and is CE-marked for use in the UK and the EU.</p>
                                        </div>
                                    </div>

                                    <div className="accordian-col">
                                        <div className="accordian-title"><h4>Is CamAPS FX available in my area?</h4></div>
                                        <div className="accordian-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>

                                    <div className="accordian-col">
                                        <div className="accordian-title"><h4>How much is does CamAPS FX cost?</h4></div>
                                        <div className="accordian-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>

                                    <div className="accordian-col">
                                        <div className="accordian-title"><h4>What CGMs are compatible with CamAPS FX?</h4></div>
                                        <div className="accordian-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>

                                    <div className="accordian-col">
                                        <div className="accordian-title"><h4>Which insulin pumps are compatible with CamAPS FX?</h4></div>
                                        <div className="accordian-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>

                                    <div className="accordian-col">
                                        <div className="accordian-title"><h4>Which smart phones are compatible with CamAPS FX?</h4></div>
                                        <div className="accordian-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>

                                    <div className="accordian-col">
                                        <div className="accordian-title"><h4>Where can I upload my CamAPS FX data?</h4></div>
                                        <div className="accordian-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>

                                    <div className="accordian-col">
                                        <div className="accordian-title"><h4>What languages are available within CamAPS FX?</h4></div>
                                        <div className="accordian-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>

                                    <div className="accordian-col">
                                        <div className="accordian-title"><h4>Where can I find the results of the clinical trials?</h4></div>
                                        <div className="accordian-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

