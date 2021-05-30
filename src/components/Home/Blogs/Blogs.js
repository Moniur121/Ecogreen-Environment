import React from 'react';
import './Blogs.css';
import planningTress from '../../../images/planting-trees.jpg'
import Dear from '../../../images/Dear.jpg'
import Plantation from '../../../images/plantation-2.jpg'
import BabyWater from '../../../images/baby-water.png';
import smallHandPlantation from '../../../images/SmallTree-plantation.png';
import { FaUserAlt, FaCalendarAlt, FaWaze, FaCompressAlt } from "react-icons/fa";
const Blogs = () => {
    return (
        <div id="blog">
            <section >
                <div className="container">
                    <div className="project-people text-center mt-5 mb-5">
                        <h4 style={{ color: '#73B925' }}>Our Blogs</h4>
                        <div className="commonBorder"></div>
                        <h1>Recent From Blog's</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-3 card similar-card">
                            <div className="top-share">
                                <FaCompressAlt></FaCompressAlt>
                            </div>
                            <div className="user-feedback mb-2 d-flex justify-content-between">
                                <div>
                                    <FaUserAlt className="feedback-icons"></FaUserAlt><small className="text-muted">Admin</small>
                                </div>
                                <div>
                                    <FaCalendarAlt className="feedback-icons"></FaCalendarAlt><small className="text-muted">Feb.22.2021</small>
                                </div>
                                <div>
                                    <FaWaze className="feedback-icons"></FaWaze><small className="text-muted">3</small>
                                </div>
                            </div>
                            <p className="top-title mb-4">COMMENTS</p>
                            <h4 className="feedback-title">Deforestation is the Threat to our Ecological System</h4>
                            <p className="text-muted ">A small river named<br /> Duden flows by their place.</p>
                        </div>
                        <div className="col-md-3 card " style={{ padding: '0' }}>

                            <img className="w-100 h-100" src={planningTress} alt="" />
                        </div>
                        <div className="col-md-3 card similar-card">
                            <div className="top-share">
                                <FaCompressAlt></FaCompressAlt>
                            </div>
                            <div className="user-feedback mb-2 d-flex justify-content-between">
                                <div>
                                    <FaUserAlt className="feedback-icons"></FaUserAlt><small className="text-muted">Admin</small>
                                </div>
                                <div>
                                    <FaCalendarAlt className="feedback-icons"></FaCalendarAlt><small className="text-muted">Feb.22.2021</small>
                                </div>
                                <div>
                                    <FaWaze className="feedback-icons"></FaWaze><small className="text-muted">3</small>
                                </div>
                            </div>
                            <p className="top-title mb-4">COMMENTS</p>
                            <h4 className="feedback-title">Deforestation is the Threat to our Ecological System</h4>
                            <p className="text-muted ">A small river named<br /> Duden flows by their place.</p>
                        </div>
                        <div className="col-md-3 card " style={{ padding: '0' }}>

                            <img className="w-100 h-100" src={Dear} alt="" />
                        </div>
                        <div className="col-md-3 card " style={{ padding: '0' }}>

                            <img className="w-100 h-100" src={Plantation} alt="" />
                        </div>
                        <div className="col-md-3 card similar-card">
                            <div className="top-share">
                                <FaCompressAlt></FaCompressAlt>
                            </div>
                            <div className="user-feedback mb-2 d-flex justify-content-between">
                                <div>
                                    <FaUserAlt className="feedback-icons"></FaUserAlt><small className="text-muted">Admin</small>
                                </div>
                                <div>
                                    <FaCalendarAlt className="feedback-icons"></FaCalendarAlt><small className="text-muted">Feb.22.2021</small>
                                </div>
                                <div>
                                    <FaWaze className="feedback-icons"></FaWaze><small className="text-muted">3</small>
                                </div>
                            </div>
                            <p className="top-title mb-4">COMMENTS</p>
                            <h4 className="feedback-title">Deforestation is the Threat to our Ecological System</h4>
                            <p className="text-muted ">A small river named<br /> Duden flows by their place.</p>
                        </div>
                        <div className="col-md-3 card " style={{ padding: '0' }}>

                            <img className="w-100 h-100" src={BabyWater} alt="" />
                        </div>
                        <div className="col-md-3 card similar-card">
                            <div className="top-share">
                                <FaCompressAlt></FaCompressAlt>
                            </div>
                            <div className="user-feedback mb-2 d-flex justify-content-between">
                                <div>
                                    <FaUserAlt className="feedback-icons"></FaUserAlt><small className="text-muted">Admin</small>
                                </div>
                                <div>
                                    <FaCalendarAlt className="feedback-icons"></FaCalendarAlt><small className="text-muted">Feb.22.2021</small>
                                </div>
                                <div>
                                    <FaWaze className="feedback-icons"></FaWaze><small className="text-muted">3</small>
                                </div>
                            </div>
                            <p className="top-title mb-4">COMMENTS</p>
                            <h4 className="feedback-title">Deforestation is the Threat to our Ecological System</h4>
                            <p className="text-muted ">A small river named<br /> Duden flows by their place.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;