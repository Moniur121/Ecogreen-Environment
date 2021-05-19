import React from 'react';
import './BabyPlantation.css';
import { FaHandHoldingHeart } from "react-icons/fa";

import BabyPlantationImg from '../../../images/BabyPlantation.png';
const BabyPlantation = () => {
    return (
        <div className="babyPlantation">
            <section>
                <div className="container">
                    <div className="row" >
                        <div className="col-md-6">
                            <img className="img-fluid" src={BabyPlantationImg} alt="" />
                        </div>
                        <div className="col-md-6" style={{paddingTop:"40px"}} >
                            <div className="title-area" style={{ textAlign: 'justify' }}>
                                <h1>Do You Care Our Mother<br /> Earth Like We Do?</h1>
                                <p className="text-muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

                                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                            </div>
                            <div className="fund-raised d-flex card w-100 mt-4">
                                <div className="found-icons">
                                    <FaHandHoldingHeart></FaHandHoldingHeart>
                                </div>
                                <div className="funds-total ">
                                    <h1>$920,000</h1>
                                    <p className="text-muted">FUNDS RAISED BY 1200 PEOPLE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BabyPlantation;