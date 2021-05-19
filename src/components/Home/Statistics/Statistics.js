import React from 'react';
import './Statistics.css';
import { FaHandHoldingHeart, FaPeopleCarry, FaHamsa } from "react-icons/fa";
const Statistics = () => {
    return (
        <div className="statistics-primary-color">
            <div className="container" style={{ paddingTop: '100px' }}>
                <div className="text-center text-light mb-3">
                    <h5>GREAT REVIEWS FOR OUR SERVICES</h5>
                    <h1>Technical Statistics</h1>
                </div> 
                <div class="row row-cols-1 row-cols-md-4 g-4" style={{textAlign:'center'}}>
                    <div class="col  ">
                        <div class="card h-100 w-100 statistics-card">
                            <div className="statistics-icons">
                                <FaHandHoldingHeart></FaHandHoldingHeart>
                            </div>
                            <div class="card-body">
                                <h1>$ 60M</h1>
                                <h4>FUND RAISED</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card h-100 w-100 statistics-card">
                            <div className="statistics-icons">
                                <FaPeopleCarry></FaPeopleCarry>
                            </div>
                            <div class="card-body">
                                <h1>9,200</h1>
                                <h4>COMPLETED PROJECTS</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100 w-100 statistics-card">
                            <div className="statistics-icons">
                                <FaHandHoldingHeart></FaHandHoldingHeart>
                            </div>
                            <div class="card-body">
                                <h1>5,800</h1>
                                <h4>DONATION</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100 w-100 statistics-card">
                            <div className="statistics-icons">
                                <FaPeopleCarry></FaPeopleCarry>
                            </div>
                            <div class="card-body">
                                <h1>2,750</h1>
                                <h4>VOLUNTEER</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;