import React from 'react';
import './OurVolunteer.css';
import Smith from '../../../images/People-image-1.png';
import Jeffrey from '../../../images/people-image-2.png';
import Angel from '../../../images/people-image-3.png';
import Aliza from '../../../images/people-image-4.png';
import { FaFacebookF, FaLinkedin, FaTwitter, FaGithub, FaDownload } from 
"react-icons/fa";
const OurVolunteer = () => {
    return (
        <div className="container mb-5">
            <div className="volunteer-title text-center py-5 mt-5 mb-5">
                <h4 style={{color: '#73B925' }}>Meet Our Volunteer</h4>
                <h3>Our Volunteer</h3>
            </div>
            <section>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div class="card volunteer-card">
                            <div className="people-img">
                                <img src={Smith} alt="" />
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Jason Smith</h4>
                                <h5 className="volunteer">VOLUNTEER</h5>
                                <div className="linking-profile">
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF className="text-light"></FaFacebookF></a>
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-light"></FaLinkedin></a>
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-light"></FaTwitter></a>
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaGithub className="text-light"></FaGithub></a>
                                     
                                </div>
                                <p class="card-text text-muted">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card volunteer-card">
                            <div className="people-img">
                                <img src={Jeffrey} alt="" />
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Jeffrey Rockenson</h4>
                                <h5 className="volunteer">VOLUNTEER</h5>
                                <div className="linking-profile">
                                <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF className="text-light"></FaFacebookF></a>
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-light"></FaLinkedin></a>
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-light"></FaTwitter></a>
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaGithub className="text-light"></FaGithub></a>
                                </div>
                                <p class="card-text text-muted">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card volunteer-card">
                            <div className="people-img">
                                <img src={Angel} alt="" />
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Angel Faria</h4>
                                <h5 className="volunteer">VOLUNTEER</h5>
                                <div className="linking-profile">
                                <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF className="text-light"></FaFacebookF></a>
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-light"></FaLinkedin></a>
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-light"></FaTwitter></a>
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaGithub className="text-light"></FaGithub></a>
                                </div>
                                <p class="card-text text-muted">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card volunteer-card">
                            <div className="people-img">
                                <img src={Aliza} alt="" />
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Aliza Smith</h4>
                                <h5 className="volunteer">VOLUNTEER</h5>
                                <div className="linking-profile">
                                <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF className="text-light"></FaFacebookF></a>
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-light"></FaLinkedin></a>
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-light"></FaTwitter></a>
                                    <a className="volunteer-icons" href="http://" target="_blank" rel="noopener noreferrer"><FaGithub className="text-light"></FaGithub></a>
                                </div>
                                <p class="card-text text-muted">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurVolunteer;