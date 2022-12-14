import React from 'react';
import HeroSection from './Components/HeroSection';

const About = () => {
  const data ={
    name: "Dzine Ecommerce",
  }
  return (
    <HeroSection  myData={data} />
  );
};

export default About;
