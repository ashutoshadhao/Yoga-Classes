import React from "react";
import { NavLink } from "react-router-dom";
const Center = () => {
  return (
    <div className="row  center_comp ">
      <br />
      <div className="col-sm-8 d-flex align-items-center justify-content-center flex-column">
        <h1 className="display-4 text-center">Yoga is Not a Work-Out <br />it is a Work-In</h1>
        <br />
        <h4 className ="para_in_center">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And
          this is the point of spiritual practice to make us teachable to open
          up our hearts and focus our awareness so that we can know what we
          already know and be who we already are
        </h4>
        <br />
        <NavLink to="/register" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Join Now</NavLink>
      </div>
      <div className="col-sm-4 d-flex align-items-center justify-content-center flex-column ">
        <img
          src="https://www.nicepng.com/png/full/320-3204013_woman-yoga-png-yoga-image-png.png"
          alt=""
          height="550"
          className="img-fluid mt-2"
        />
      </div>
    </div>
  );
};

export default Center;
