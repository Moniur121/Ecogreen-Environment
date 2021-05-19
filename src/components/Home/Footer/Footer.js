import React from 'react';
import './Footer.css';
import { FaUserAlt, FaCalendarAlt, FaWaze, FaCompressAlt, FaArrowRight, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt,FaFacebookF, FaLinkedin,FaTwitter,FaGithub} from "react-icons/fa";
import recentImgOne from '../../../images/recent-img-1.png';
const Footer = () => {
    return (
        <div className="footer-area" id="contact">
            <section>
                <div className="container">
                    <div class="row row-cols-1 row-cols-md-5 g-4">
                        <div class="col">
                            <h3 className="text-light">ECO<span style={{ color: '#73B925' }}>GREEN</span></h3>
                            <p className="text-muted mb-5">ENVIRONMENT SOCIETY</p>
                            <div className="text-light">
                                <p>A small river named Duden</p>
                                <p>flows by their place and</p>
                                <p>supplies it with the</p>
                                <p>necessary regelialia.</p>
                            </div>
                            <div className="linking-profile">
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF className="text-light"></FaFacebookF></a>
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-light"></FaLinkedin></a>
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-light"></FaTwitter></a>
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaGithub className="text-light"></FaGithub></a>
                                     
                                </div>
                        </div>
                        <div class="col">
                            <h3 className="mb-5 text-light">Service</h3>
                            <FaArrowRight className="text-light"></FaArrowRight> <span className="services-intro">Recycling</span><br />
                            <FaArrowRight className="text-light"></FaArrowRight> <span className="services-intro">Water Refine</span><br />
                            <FaArrowRight className="text-light"></FaArrowRight> <span className="services-intro">Ecosystem</span><br />
                            <FaArrowRight className="text-light"></FaArrowRight> <span className="services-intro">Solar Enerfy</span>
                        </div>
                        <div class="col">
                            <div style={{ marginTop: '80px' }}>
                                <FaArrowRight className="text-light"></FaArrowRight> <span className="services-intro">Save Animals</span><br />
                                <FaArrowRight className="text-light"></FaArrowRight> <span className="services-intro">Plant Ecology</span><br />
                                <FaArrowRight className="text-light"></FaArrowRight> <span className="services-intro">Dynamic Ecology</span><br />
                                <FaArrowRight className="text-light"></FaArrowRight> <span className="services-intro">Tree Planting</span>
                            </div>
                        </div>
                        <div class="col">
                            <h3 className="text-light">Recent Post</h3>
                            <div >
                                <div className="d-flex" style={{ marginTop: '50px' }}>
                                    <div>
                                        <img src={recentImgOne} alt="" />
                                    </div>
                                    <div className="text-light">
                                        <FaCalendarAlt></FaCalendarAlt><span>Feb.22.2021</span> <FaUserAlt></FaUserAlt>
                                        <p style={{ fontWeight: 'bolder' }}>Ecological System Responsible for Green Energy</p>
                                    </div>
                                </div>
                                <div className="d-flex" style={{ marginTop: '5px' }}>
                                    <div>
                                        <img src={recentImgOne} alt="" />
                                    </div>
                                    <div className="text-light">
                                        <FaCalendarAlt></FaCalendarAlt><span>Feb.22.2021</span> <FaUserAlt></FaUserAlt>
                                        <p style={{ fontWeight: 'bolder' }}>Ecological System Responsible for Green Energy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <h3 className="text-light">Have a Questions</h3>
                            <div className="text-light" >
                                <FaMapMarkerAlt></FaMapMarkerAlt>  <span>203 Fake St. Mountain View, San Francisco, California, USA</span><br /><br />
                                <FaPhoneAlt></FaPhoneAlt>   <span>+2 392 3929 210
                                </span><br/><br />
                                <FaEnvelope></FaEnvelope>   <span>info@yourdomain.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div className="py-5 text-center">
                    <p className="text-light">Copyright ©2021 All rights reserved | This created by Moniur Rahman</p>
                </div>
            </section>
        </div>
    );
};

export default Footer;