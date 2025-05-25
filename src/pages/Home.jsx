import React from 'react';
import Hero from '../components/Hero';
import OurCourses from '../components/OurCourses';
import OurThoughts from '../components/OurThoughts';
import OurWork from '../components/OurWork';


const Home = () => {
    return (
    <section className="container mx-auto p-6">
        <Hero></Hero>
        <OurCourses></OurCourses>
        <OurThoughts></OurThoughts>
        <OurWork></OurWork>
    </section>
    );
};

export default Home;