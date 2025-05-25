import React from 'react';
import Hero from '../components/Hero';
import OurCourses from '../components/OurCourses';
import OurThoughts from '../components/OurThoughts';
import OurWork from '../components/OurWork';
import WhyChooseUS from '../components/WhyChooseUS';
import Stats from '../components/stats';
import Review from '../components/Review';
import Certificate from '../components/Certificate';


const Home = () => {
    return (
    <section className="container mx-auto p-6">
        <Hero></Hero>
        <OurCourses></OurCourses>
        <OurThoughts></OurThoughts>
        <OurWork></OurWork>
        <WhyChooseUS></WhyChooseUS>
        <Stats></Stats>
        <Review></Review>
        <Certificate></Certificate>
        
    </section>
    );
};

export default Home;