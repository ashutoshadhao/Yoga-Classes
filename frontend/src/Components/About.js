import React from "react";
import yogaPic from "../Images/yr.png";
import "./about.css";
const About = () => {
  return (
    <div className="m-5">
      <h1 className="text-center m-5 display-4">About Us</h1>

      <div className="container">
        <div className="row">
          <div className="col-sm-6 ">
            <img src={yogaPic} alt="" height={550} className="img-fluid " />
          </div>
          <div className="col-sm-6 ">
            <div>
              <h1 className="text-center m-5">Welcome to Yoga Classes </h1>
              <p className="about-para">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we make group
                workouts fun, daily food healthy & tasty, mental fitness easy
                with yoga & meditation, and medical & lifestyle care
                hassle-free. We are market leader for 14 Years. We train around
                50000 youth every year.
              </p>
              <span className="about-para ">
                #<span className="colorRed hash">BeBetterEveryDay</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
