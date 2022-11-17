import React from 'react';
import Footer from '../Shared/Footer';

import Contact from './Contact';
import Header from './Header';
import Info from './InfoCard/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonial/Testimonials';
const Home = () => {
    return (
        <div className='px-12'>
            <Header></Header>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;