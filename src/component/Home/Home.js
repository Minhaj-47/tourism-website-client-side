// this is home section where banner services and the rest of the secion shown
import React from "react";
import Banner from "../Banner/Banner ";
import Compliments from "../Compliments/Compliments";
import Contact from "../Contact/Contact";
import Services from "../Sevices/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Compliments></Compliments>
      <Contact></Contact>
    </div>
  );
};

export default Home;
