import React from 'react';
import './Service.css';
import { FaRecycle, FaWater, FaSlack, FaSolarPanel, FaHands } from "react-icons/fa";
const Service = () => {
    return (
        <div className="container" id="service">
            <div className="service-people text-center mt-5 mb-5">
                <h4 style={{color: '#73B925'}}>Service</h4>
                <div className="commonBorder"></div>
                <h1>Over <span style={{color: '#73B925'}}>40k+</span>people working<br/> with us</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card service-card p-4">
                         <div className="icons">
                             <FaRecycle></FaRecycle>
                         </div>
                        <div class="card-body">
                            <h4 class="card-title">Recyling</h4>
                            <p class="card-text ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card service-card p-4">
                        <div className="icons">
                            <FaWater></FaWater>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">Water Refine</h4>
                            <p class="card-text ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card service-card p-4">
                        <div className="icons">
                            <FaSlack></FaSlack>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">Ecosystem</h4>
                            <p class="card-text ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card service-card p-4 ">
                        <div className="icons">
                            <FaSolarPanel></FaSolarPanel>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">Solar Energy</h4>
                            <p class="card-text ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card service-card p-4">
                        <div className="icons">
                            <FaHands></FaHands>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">Save Animals</h4>
                            <p class="card-text ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
    );
};

export default Service;