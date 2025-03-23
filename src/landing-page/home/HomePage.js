import React from 'react';
import Hero from './Hero';
import Award from './Award';
import State from './State';
import Pricing from './pricing';
import Education from './Education';
import OpenAcount from '../OpenAcount'
import Navbar from '../Navbar';
import Footer from '../Footer';
function HomePage() {
    return ( <>
    <Hero/>
    <Award/>
    <State/>
    <Pricing/>
    <Education/>
    <OpenAcount/>
    </> );
}

export default HomePage;