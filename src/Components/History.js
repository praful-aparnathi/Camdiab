import React, { Component } from 'react';
import { Header } from './Header';
import {Footer} from './Footer';

export class History extends Component {
    checkVisible = (elm) => {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }
    componentDidMount() {
        let self = this;
        document.querySelectorAll(".pattern-div").forEach((item, index) => {
            if (self.checkVisible(document.querySelectorAll(".pattern-div")[index])) {
                setTimeout(function () {
                    document.querySelectorAll(".pattern-div")[index].classList.add("show-section");
                }, 1000)
            }
        })
        
        document.addEventListener("scroll", function (e) {
            document.querySelectorAll(".pattern-div").forEach((item, index) => {
                if (self.checkVisible(document.querySelectorAll(".pattern-div")[index])) {
                    setTimeout(function () {
                        document.querySelectorAll(".pattern-div")[index].classList.add("show-section");
                    }, 1000)
                }
            })
        })
    }
    render() {
        return (
            <div>
                <Header />
                <section className="history-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <div className="history-head">
                                    <h1>Our CamDiab journey</h1>
                                    <p>A timeline of how the team behind CamAPS FX came to help those with diabetes with our Cambridge algorithm.</p>
                                </div>
                                <div className="history-content">

                                    <div className="history-col">
                                        <h2>2006–2010</h2>
                                        <h4>Early in-clinic trials</h4>
                                        <p>Start of Artificial Pancreas project at Cambridge with trials in children with type 1 diabetes. Joined the JDRF Artificial Pancreas Consortium. Cambridge algorithm stress-tested following exercise and alcohol consumption in adults with type 1 diabetes. Cambridge algorithm evaluated in pregnant women with type 1 diabetes.</p>
                                        <span className="pattern-div">
                                            <span className="circle-div"></span>
                                            <span className="vertical-line-div"></span>
                                            <span className="horizontal-line-div"></span>
                                        </span>
                                    </div>

                                    <div className="history-col">
                                        <h2>2011–2014</h2>
                                        <h4>Night-only and free-living feasibility trials</h4>
                                        <p>Overnight use of Cambridge algorithm evaluated by children, adults and pregnant women with type 1 diabetes. Cambridge algorithm used day-and-night over seven days by adults with type 1 diabetes.</p>
                                        <span className="pattern-div">
                                            <span className="horizontal-line-div"></span>
                                            <span className="vertical-line-div"></span>
                                            <span className="horizontal-line-div"></span>
                                        </span>
                                    </div>
                                    <div className="history-col">
                                        <h2>2015–2016</h2>
                                        <h4>Short day-and-night free-living trials</h4>
                                        <p>Cambridge algorithm used by well controlled adults with type 1 diabetes over four weeks. Cambridge algorithm used by adolescents with type 1 diabetes over three weeks.</p>
                                        <span className="pattern-div">
                                            <span className="horizontal-line-div"></span>
                                            <span className="vertical-line-div"></span>
                                            <span className="horizontal-line-div"></span>
                                        </span>
                                    </div>
                                    <div className="history-col">
                                        <h2>2017–2018</h2>
                                        <h4>Longer day-and-night and young-children trials</h4>
                                        <p>Cambridge algorithm used over three months by children and adults with type 1 diabetes. Cambridge algorithm used over 2 years by children and adolescents from onset of diabetes. Cambridge algorithm used in young children one to seven years old with type 1 diabetes.</p>
                                        <span className="pattern-div">
                                            <span className="horizontal-line-div"></span>
                                            <span className="vertical-line-div"></span>
                                            <span className="circle-div"></span>
                                        </span>
                                    </div>
                                    <div className="history-col">
                                        <h2>2019</h2>
                                        <h4>Transition to CamAPS FX </h4>
                                        <p>CamAPS FX app used by older adults with type 1 diabetes. CamAPS FX app used throughout pregnancy by pregnant women with type 1 diabetes. CamAPS FX app CE-marked for use in the EU and the UK</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

