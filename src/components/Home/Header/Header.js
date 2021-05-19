import React from 'react';
import './Header.css';
import { FaRegEnvelope, FaPhone, FaLocationArrow, FaHandHoldingHeart } from "react-icons/fa";
const Header = () => {
    return (
        <div>
            <section id="about">
                <div className="header-info">
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-3">
                            <div className="p-3  ">
                                <h3 className="text-light fs-1">Eco<span className="icons-primary-color">Green</span></h3>
                                <p className="text-muted">Environment Society</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex p-3 " style={{ textAlign: 'justify' }}>
                                <div className="icon-area mt-3 " style={{ marginRight: '9px' }}>
                                    <FaRegEnvelope className="fs-3 icons-primary-color"></FaRegEnvelope>
                                </div>
                                <div className="title-area">
                                    <h5 className="icons-primary-color">Email</h5>
                                    <p className="text-muted">moniurrahman121@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex p-3  " style={{ textAlign: 'justify' }}>
                                <div className="icon-area mt-3 " style={{ marginRight: '9px' }}>
                                    <FaPhone className="fs-3 icons-primary-color"></FaPhone>
                                </div>
                                <div className="title-area">
                                    <h5 className="icons-primary-color">Call Us</h5>
                                    <p className="text-muted">+8801710339782</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex p-3  " style={{ textAlign: 'justify' }}>
                                <div className="icon-area mt-3 " style={{ marginRight: '9px' }}>
                                    <FaLocationArrow className="fs-3 icons-primary-color"></FaLocationArrow>
                                </div>
                                <div className="title-area">
                                    <h5 className="icons-primary-color">Location</h5>
                                    <p className="text-muted">Uposhohor, Sylhet-3310</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="header-main">
                    <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#73B925'}}>
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#"><FaHandHoldingHeart style={{fontSize:'30px'}}></FaHandHoldingHeart><span className="fs-4 text-light">Donate Now!</span></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse navigation" id="navbarNav">
                                <ul class="navbar-nav ms-auto" >
                                    <li class="nav-item">
                                        <a href="#home" class="nav-link fs-5 text-light" aria-current="page" >Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#about" class="nav-link fs-5 text-light" >About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#service" class="nav-link fs-5 text-light" >Service</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#project" class="nav-link fs-5 text-light" >Project</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#blog" class="nav-link fs-5 text-light" >Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#contact" class="nav-link fs-5 text-light" >Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </div>
    );
};

export default Header;