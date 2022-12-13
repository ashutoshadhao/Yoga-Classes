import React from "react";
import pricing from "../Images/pricing.png";
const Pricing = () => {
  return (
    <div className="container-fluid ">
      <div className="row  background-pricing">
        <div className="col-md-6  ">
          <img src={pricing} alt="" height={550} className="pricing_ig" />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center flex-column background-pricing">
          <span className="cutted display-5 ">₹2000/month</span>
          <span className=" display-1 price_color">₹500/month</span>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
