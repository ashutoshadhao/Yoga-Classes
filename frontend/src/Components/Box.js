import React from "react";

const Box = (props) => {
  return (
    <div className="card box" style={{ width: "18rem" }}>
      <div>
        <img className="card-img-top p-2" src={props.imgVal} alt="Card  cap" />
      </div>
      <div className="card-body">
        <h4 className="card-title m-2">{props.value}</h4>
        <p className="card-text m-2">&nbsp;{props.para}</p>
      </div>
    </div>
  );
};

export default Box;
