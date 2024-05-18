import React from "react";

import Instagram from './../../../components/Sections/Instagram/Instagram';
import Banner from "../../../components/Sections/Banner/Banner";
import AboutTasty from "../../../components/Sections/AboutTasty/AboutTasty";
import Menu from './../../../components/Sections/Menu/Menu';
import Blogs from "../../../components/Sections/Blogs/Blogs";
import Partners from "../../../components/Sections/Partners/Partners";
import Testers from "../../../components/Sections/Testers/Testers";
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <>
   
<Helmet>
  <title>Home</title>
</Helmet>
<Banner /> 
 <AboutTasty/> 
   <Menu/>
   <Blogs/>
   <Testers/>
   <Partners/>

      <Instagram/>
    </>
  );
};

export default Home;
