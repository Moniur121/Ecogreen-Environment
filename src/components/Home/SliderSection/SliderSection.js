import React from 'react';
import { Carousel } from 'react-bootstrap';
import sliderImgOne from '../../../images/sliderImage-1.png';
import sliderImgTwo from '../../../images/sliderImage-2.png';
import sliderImgThree from '../../../images/sliderImage-3.png';
 

const SliderSection = () => {
    return (
        <div>
            <section>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={sliderImgOne} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                 <h5 style={{color: '#73B925' }}>Save the world</h5>
                                <h1 style={{fontSize:'60px'}}>Make the World<br/> Green Again</h1>
                                <h4 className="text-muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h4>
                                <button className="btn" style={{ backgroundColor: '#73B925', width: '170px', fontSize: '20px', fontWeight: 'bold',color: 'white'}}>GET STARTED</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={sliderImgTwo} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                            <h5 style={{color: '#73B925' }}>Save the world</h5>
                                <h1 style={{fontSize:'60px'}}>Make the World<br/> Green Again</h1>
                                <h4 className="text-muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h4>
                                <button className="btn" style={{ backgroundColor: '#73B925', width: '170px', fontSize: '20px', fontWeight: 'bold',color: 'white'}}>GET STARTED</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={sliderImgThree}  class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                            <h5 style={{color: '#73B925' }}>Save the world</h5>
                                <h1 style={{fontSize:'60px'}}>Make the World<br/> Green Again</h1>
                                <h4 className="text-muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h4>
                                <button className="btn" style={{ backgroundColor: '#73B925', width: '170px', fontSize: '20px', fontWeight: 'bold',color: 'white'}}>GET STARTED</button>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </section>
        </div>
    );
};

export default SliderSection;