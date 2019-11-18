import React, { Component } from 'react';
import {GerHeader} from '../German-Components/Header';
import {Footer} from '../German-Components/Footer';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import phone_image from '../assets/images/phone-hero-image.png';
import service_ic from '../assets/images/adaptable-ic.svg';
import smartphone_ic from '../assets/images/android-ic.svg';
import family_ic from '../assets/images/family-ic.svg';
import tested_ic from '../assets/images/tested-ic.svg';
import file_ic from '../assets/images/file-ic.svg';
import down_arrow from '../assets/images/download-arrow.png';

export class GermanHome extends Component {
    render() {
        return (
            <div>
             <GerHeader />
                <section className="main-banner">
                    <div className="banner-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-7 col-xl-6 banner-left">
                                    <h1>CamAPS <span>FX</span></h1>
                                    <p>The new hybrid closed-loop system that automatically adjusts insulin delivery on your insulin pump based on your sensor glucose readings.</p>
                                    <a href="#" className="btn">Find out more</a>
                                </div>
                                <div className="col-12 col-md-5 col-xl-6 banner-right">
                                    <img src={phone_image} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blue-content-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <h2><span>Our mission</span></h2>
                                <p>To help those with type 1 diabetes and their families live better lives</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="service-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <div className="icon-col">
                                    <span className="col-img"><img src={service_ic} alt="icon" /></span>
                                    <h4>Adaptive and personalised to you</h4>
                                    <p>Learns and adjusts according to your insulin needs, whilst giving you the freedom to change settings.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="icon-col">
                                    <span className="col-img"><img src={smartphone_ic} alt="icon" /></span>
                                    <h4>Runs on your smartphone</h4>
                                    <p>Compatible with the Android OS*.</p>
                                    <p><small>*Android is a trademark of Google LLC</small></p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="icon-col">
                                    <span className="col-img"><img src={family_ic} alt="icon" /></span>
                                    <h4>Available for all ages</h4>
                                    <p>Approved for ages one year and over.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="single-ic-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-7">
                                <div className="content-left">
                                    <h2>Comprehensively tested</h2>
                                    <p>Developed at the University of Cambridge. Considered by many as ‘the best algorithm out there’.</p>
                                    <p>Randomised clinical trials have shown a significant increase in time in range, a reduction in HbA1c, as well as a reduction in time spent in hypoglycaemia and hyperglycaemia.</p>
                                    <ol>
                                        <li>https://www.dexcom.com/dexcom-international-compatibility</li>
                                        <li>https://diabetes.medicinematters.com/artificial-pancreas-systems/type-1-diabetes/the-artificial-pancreas--what-s-on-the-horizon-/16939360</li>
                                        <li>https://doi.org/10.1016/S0140-6736(18)31947-0</li>
                                        <li>https://doi.org/10.2337/dc15-2078 (RH to confirm correct)</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="col-12 col-md-5 image-right-wrap">
                                <div className="image-right">
                                    <img src={tested_ic} alt="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <div className="content-inner">
                                    <h2>What is CamAPS FX?</h2>
                                    <p>CamAPS FX is an Android app to manage glucose levels in people with type 1 diabetes, aged one year and older, using a hybrid closed-loop approach.</p>
                                    <p>Additional age restrictions may apply depending on your chosen Continuous Glucose Monitor or insulin pump.</p>
                                    <a href="#" title="Find out more" className="btn">Find out more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="two-col-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12">
                                <h2>Press releases</h2>
                            </div>
                            <div className="col-12 col-md-7">
                                <div className="left-col">
                                    <div className="ic-image">
                                    <img src={file_ic} alt="ic" />
                                    </div>
                                    <div className="right-content">
                                        <h5>Date tag</h5>
                                        <h3>Title of newest press release</h3>
                                        <p>Brief sentence describing the press release.</p>
                                        <a href="#" title="Download" className="download-link"><img src={down_arrow} alt="ic" />Download</a>
                                    </div> 
                                     </div>
                            </div>
                            <div className="col-12 col-md-5">
                            <SimpleBar className="custom-scrollbar">
                            <div className="right-col">
                                <h5>Date tag</h5>
                                <p>Title of previous press release</p>
                                <a href="#" title="Download" className="download-link"><img src={down_arrow} alt="ic" />Download</a>
                                <h5>Date tag</h5>
                                <p>Title of previous press release</p>
                                <a href="#" title="Download" className="download-link"><img src={down_arrow} alt="ic" />Download</a>
                                <h5>Date tag</h5>
                                <p>Title of previous press release</p>
                                <a href="#" title="Download" className="download-link"><img src={down_arrow} alt="ic" />Download</a>
                                <h5>Date tag</h5>
                                <p>Title of previous press release</p>
                                <a href="#" title="Download" className="download-link"><img src={down_arrow} alt="ic" />Download</a>
                                <h5>Date tag</h5>
                                <p>Title of previous press release</p>
                                <a href="#" title="Download" className="download-link"><img src={down_arrow} alt="ic" />Download</a>
                                <h5>Date tag</h5>
                                <p>Title of previous press release</p>
                                <a href="#" title="Download" className="download-link"><img src={down_arrow} alt="ic" />Download</a>
                            </div>
                            </SimpleBar>
                        </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

