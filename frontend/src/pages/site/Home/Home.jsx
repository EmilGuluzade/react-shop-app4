import React from "react";

import Instagram from './../../../components/Sections/Instagram/Instagram';
import Guest from './../../../components/Sections/Guest/Guest';
import Banner from "../../../components/Sections/Banner/Banner";
import AboutTasty from "../../../components/Sections/AboutTasty/AboutTasty";
import Menu from './../../../components/Sections/Menu/Menu';


const Home = () => {
  return (
    <>
   
    {/* <Guest/> */}
   {/* <Banner /> */}
   {/* <AboutTasty/> */}
   <Menu/>
      <Instagram/>
    </>
  );
};

export default Home;
