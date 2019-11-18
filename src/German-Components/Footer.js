import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import twitter_logo from '../assets/images/twitter-logo.png';

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <div className="footer-top">
                                    <div className="footer-col">
                                        <ul>
                                            <li><Link to="/ger/faq">FAQs</Link></li>
                                            <li><Link to="/ger/support">Support</Link></li>
                                            <li><Link to="/ger/history">History</Link></li>
                                        </ul>
                                    </div>
                                    <div className="footer-col">
                                        <ul>
                                            <li><Link to="#">User manual</Link></li>
                                            <li><Link to="#">Installation guide</Link></li>
                                        </ul>
                                    </div>
                                    <div className="footer-col">
                                        <ul>
                                            <li><Link to="#">Terms and conditions</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">EULA</Link></li>
                                        </ul>
                                    </div>
                                    <div className="footer-col">
                                    <Link to="#">
                                        <img src={twitter_logo} alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="footer-bottom">
                                    <p>CamAPS FX is trademark of CamDiab Ltd. Other trademarks are the property of their respective owners. No use of any CamDiab trademark, trade name, or trade dress in this site may be made without the prior written authorisation of CamDiab, except to identify the product or services of the company. The product images are for illustrative purposes only.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <p><span>&copy;</span> 2019 CamDiab Ltd. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        );
    }
}

