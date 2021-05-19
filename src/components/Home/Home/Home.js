import React from 'react';
import BabyPlantation from '../BabyPlantation/BabyPlantation';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurVolunteer from '../OurVolunteer/OurVolunteer';
import Project from '../Project/Project';
import Service from '../Service/Service';
import SliderSection from '../SliderSection/SliderSection';
import Statistics from '../Statistics/Statistics';
import Subscriber from '../Subscriber/Subscriber';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
             <SliderSection></SliderSection>
            <Service></Service>
            <Project></Project>
            <Statistics></Statistics>
            <OurVolunteer></OurVolunteer>
            <BabyPlantation></BabyPlantation>
            <Blogs></Blogs>
            <Subscriber></Subscriber>
            <Footer></Footer>
        </div>
    );
};

export default Home;