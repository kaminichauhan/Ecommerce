import React from 'react';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Trusted from  './Components/Trusted';
import Footer from './Components/Footer';
import FeatureProducts from './Components/FeatureProducts';
const Home = () => {
  const data = {
    name:"Dzine store",
  }
  return(
<>

    <HeroSection  myData={data} />
    <FeatureProducts/>
    <Services/>
    <Trusted/>
    <Footer/>
    </>
  );

};



export default Home;
