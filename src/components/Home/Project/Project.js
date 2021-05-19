import React from 'react';
import './Project.css';
import planningTress from '../../../images/planting-trees.jpg'
import Dear from '../../../images/Dear.jpg'
import Plantation from '../../../images/plantation-2.jpg'
import BabyWater from '../../../images/baby-water.png';
import smallHandPlantation from '../../../images/SmallTree-plantation.png';
import { FaHandHoldingHeart, FaPeopleCarry, FaHamsa } from "react-icons/fa";
const Project = () => {
    return (
        <div id="project">
            <section>
                <div>
                    <div className="project-people text-center mt-5 mb-5">
                        <h4 style={{ color: '#73B925' }}>Project</h4>
                        <h1>Our Campaign</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-3 card similar-card p-4 h-75">
                            <p className="top-title">ECOLOGY</p>
                            <h4>Ecological Friendly</h4>
                            <p className="text-muted">Far from the countries Vokalia and Consonantia.</p>
                            <div className="mb-3">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: '70%', backgroundColor: '#D7F1B9', fontSize: '18px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="raised">
                                    <p><span className="text-muted">Raised</span>: $9800</p>
                                </div>
                                <div className="goal">
                                    <p><span className="text-muted">Goal</span>: $15000</p>
                                </div>
                            </div>
                            <button className="btn" style={{ backgroundColor: '#73B925', width: '140px' }}>DONATE NOW!</button>
                        </div>
                        <div className="col-md-3 card " style={{ padding: '0' }}>

                            <img className="w-100 h-100" src={planningTress} alt="" />
                        </div>
                        <div className="col-md-3 card h-75 similar-card p-4 h-75">
                            <p className="top-title">WATER</p>
                            <h4>Water Pollution</h4>
                            <p className="text-muted">Far from the countries Vokalia and Consonantia.</p>
                            <div className="mb-3">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: '70%', backgroundColor: '#D7F1B9', fontSize: '18px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="raised">
                                    <p><span className="text-muted">Raised</span>: $9800</p>
                                </div>
                                <div className="goal">
                                    <p><span className="text-muted">Goal</span>: $15000</p>
                                </div>
                            </div>
                            <button className="btn" style={{ backgroundColor: '#73B925', width: '140px' }}>DONATE NOW!</button>
                        </div>
                        <div className="col-md-3 card " style={{ padding: '0' }}>

                            <img className="w-100 h-100" src={Dear} alt="" />
                        </div>
                        <div className="col-md-3 card " style={{ padding: '0' }}>

                            <img className="w-100 h-100" src={Plantation} alt="" />
                        </div>
                        <div className="col-md-3 card h-75 similar-card p-4 h-75">
                            <p className="top-title">ECOLOGY</p>
                            <h4>Planting More Trees</h4>
                            <p className="text-muted">Far from the countries Vokalia and Consonantia.</p>
                            <div className="mb-3">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: '70%', backgroundColor: '#D7F1B9', fontSize: '18px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="raised">
                                    <p><span className="text-muted">Raised</span>: $9800</p>
                                </div>
                                <div className="goal">
                                    <p><span className="text-muted">Goal</span>: $15000</p>
                                </div>
                            </div>
                            <button className="btn" style={{ backgroundColor: '#73B925', width: '140px' }}>DONATE NOW!</button>
                        </div>
                        <div className="col-md-3 card " style={{ padding: '0' }}>

                            <img className="w-100 h-100" src={BabyWater} alt="" />
                        </div>
                        <div className="col-md-3 card h-75 similar-card p-4 h-75">
                            <p className="top-title">PLANTING</p>
                            <h4>Planting Trees</h4>
                            <p className="text-muted">Far from the countries Vokalia and Consonantia.</p>
                            <div className="mb-3">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: '70%', backgroundColor: '#D7F1B9', fontSize: '18px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="raised">
                                    <p><span className="text-muted">Raised</span>: $9800</p>
                                </div>
                                <div className="goal">
                                    <p><span className="text-muted">Goal</span>: $15000</p>
                                </div>
                            </div>
                            <button className="btn" style={{ backgroundColor: '#73B925', width: '140px' }}>DONATE NOW!</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row" >
                    <div className="col-md-6" >
                        <img src={smallHandPlantation} alt="" />
                    </div>
                    <div className="col-md-6 volunteer-area">
                        <div className="container">
                            <h5 style={{ color: '#73B925' }}>BECOME A VALUNTEER</h5>
                            <h1 >Join our Event & Helping<br />Us By Our Donation</h1>
                            <p className="text-muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className="row d-flex justify-content-between">
                                <div className="col-md-6 card P-5 w-25 ">
                                    <div className="icons mt-3">
                                        <FaHandHoldingHeart></FaHandHoldingHeart>
                                    </div>
                                    <button className="btn" style={{ backgroundColor: 'white', width: '100px', fontSize: '10px', fontWeight: 'bold' }}>DONATE NOW!</button>
                                </div>
                                <div className="col-md-6 card P-3 w-25 ">
                                    <div className="icons mt-3">
                                        <FaPeopleCarry></FaPeopleCarry>
                                    </div>
                                    <button className="btn" style={{ backgroundColor: 'white', width: '100px', fontSize: '10px', fontWeight: 'bold' }}>PROJECT SPONSOR</button>
                                </div>
                                <div className="col-md-6 card w-25 P-3">
                                    <div className="icons mt-3">
                                        <FaHamsa></FaHamsa>
                                    </div>
                                    <button className="btn" style={{ backgroundColor: 'white', width: '100px', fontSize: '10px', fontWeight: 'bold' }}>BE A VOLUNTEER</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;