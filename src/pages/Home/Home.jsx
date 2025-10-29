import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import About from './About/About'
import OurServices from './OurServices/OurServices'
import CallToAction from './CallToAction/CallToAction'
import WorkingProgress from './WorkingProgress/WorkingProgress'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {

    const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);


  return (
    <>
    <HeroSection/>
    <About/>
    <OurServices/>
    <CallToAction/>
    <WorkingProgress/>
    <WhyChooseUs/>
    </>
  )
}

export default Home
