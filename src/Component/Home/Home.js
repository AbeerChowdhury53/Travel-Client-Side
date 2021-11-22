import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Carosal from '../Carosal/Carosal';
import Faq from '../Faq/Faq';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
         
            <Carosal></Carosal>
            <Services></Services>
            <Faq></Faq>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;