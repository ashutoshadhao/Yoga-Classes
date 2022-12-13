import React from "react";
import About from "./About";
import Center from "./Center";
import Features from "./Features";
import Pricing from "./Pricing";
import Register from "./Register";
const Home = () => {
  return (
    <div className="">
      <Center />
      <br />
      <Pricing />
      <Register />
      <hr />
      <Features />
      <hr />
      <About />
    </div>
  );
};

export default Home;
