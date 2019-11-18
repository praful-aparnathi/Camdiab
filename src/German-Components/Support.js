import React, { Component } from 'react';
import {GerHeader} from '../German-Components/Header';
import {Footer} from '../German-Components/Footer';
import file_ic from '../assets/images/file-ic.svg';
import down_arrow from '../assets/images/download-arrow.png';
import clinic_support from '../assets/images/clinical-support.svg';
import tech_support from '../assets/images/technical-support.svg';


export class German_Support extends Component {
    render() {
        return (
            <div>
                <GerHeader/>
                <section className="inner-banner">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-10">
                                <h1>Need some help?</h1>
                                <p>We hope these options below will help you with any problems you might have. If not, please get in touch. </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blue-content-box inner-blue-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <span className="col-img"><img src={clinic_support} alt="icon" /></span>
                                <h2>Clinical Support</h2>
                                <p>If you have any questions about your healthcare, please contact your hospital care team.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="support-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 content-wrap">
                                <div className="support-inner">
                                    <span className="col-img"><img src={tech_support} alt="icon" /></span>
                                    <h2>Technical Support</h2>
                                    <p>Here you can find downloadable support material and contact details if you need to get in touch with our support team. </p>
                                </div>
                                <div className="sub-info-col">
                                    <div className="info-col">
                                        <h3>Technical materials:</h3>
                                        <h4>User manual</h4>
                                        <a href="#" title="Download" className="download-link"><img src={down_arrow} alt="ic" />Download</a>
                                        <h4>Installation guide</h4>
                                        <a href="#" title="Download" className="download-link"><img src={down_arrow} alt="ic" />Download</a>
                                    </div>
                                    <div className="info-col">
                                        <h3>Contact details:</h3>
                                        <p>Our support team are available during business hours of Monday–Friday, 9am–5pm.</p>
                                        <a href="mailto:support@camdiab.com" title="Mail Us">support@camdiab.com</a>
                                        <a href="tel:01234678678" title="Contact Us">01234 678 678</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="support-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 content-wrap">
                                <div className="support-inner">
                                    <span className="col-img"><img src={tech_support} alt="icon" /></span>
                                    <h2>Training Support</h2>
                                    <p>Here you can find downloadable support material and contact details if you need to get in touch with our support team. </p>
                                </div>
                                <div className="sub-info-col">
                                    <div className="info-col">
                                        <h3>Training materials:</h3>
                                        <h4>Training Document One</h4>
                                        <a href="#" title="Download" className="download-link"><img src={down_arrow} alt="ic" />Download</a>
                                        <h4>Training Document Two</h4>
                                        <a href="#" title="Download" className="download-link"><img src={down_arrow} alt="ic" />Download</a>
                                    </div>
                                    <div className="info-col">
                                        <h3>Training links:</h3>
                                        <h4>Competency Checklist</h4>
                                        <a href="#" title="Click Here" className="btn">Click Here</a>
                                        <h4>Training Video</h4>
                                        <a href="#" title="Click Here" className="btn">Click Here</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

