import React from "react";
import { useState } from "react";
import "../App.css";
import swal from "sweetalert";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    age: "",
    phone: "",
    batch: "",
    gender: "",
    cname: "",
    cnumber: "",
    expmonth: "",
    expyear: "",
    cvv: "",
  });

  let name, value;

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      gender,
      age,
      address,
      batch,
      cname,
      cnumber,
      expmonth,
      expyear,
      cvv,
    } = user;
    const main = document.getElementById("errorMessage");
    main.innerHTML = ``;
    console.log(name);
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      gender === "" ||
      age === "" ||
      address === "" ||
      batch === "" ||
      cname === "" ||
      cnumber === "" ||
      expmonth === "" ||
      expyear === "" ||
      cvv === ""
    ) {
      main.innerHTML = `<h3> Please Fill All The Details </h3>`;
      return;
    }

    //  Age Validation
    if (age < 18) {
      main.innerHTML = `<h3> You Are UNDER AGE FOR REGISTRATION. Valid Age IS 18 TO 65 YEARS </h3>`;
      return;
    }
    if (age > 65) {
      main.innerHTML = `<h3> You Are OVER AGE FOR REGISTRATION. Valid Age IS 18 TO 65 YEARS </h3>`;
      return;
    }

    // Phone Number Validation
    const txtPhoneNumber = phone.toString();
    if (
      txtPhoneNumber.length !== 10 ||
      (txtPhoneNumber[0] !== "9" &&
        txtPhoneNumber[0] !== "8" &&
        txtPhoneNumber[0] !== "7")
    ) {
      main.innerHTML = `<h3> Enter Valid Phone Number </h3>`;
      return;
    }

    //   Email Validation
    if (email.indexOf("@") <= 0) {
      main.innerHTML = `<h3> Enter Valid Email </h3>`;
      return;
    }

    if (email[email.length - 4] !== "." && email[email.length - 3] !== ".") {
      main.innerHTML = `<h3> Enter Valid Email </h3>`;
      return;
    }

    //

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        gender,
        age,
        address,
        batch,
      }),
    });

    //  Email Service

    if (res.status === 200) {
      swal(
        "Registaration Successfull !",
        "Meet You in your First Yoga Class ",
        "success"
      );
      main.innerHTML = "";
      setTimeout(() => {
        window.location.reload();
      }, 2100);
    }
  };

  return (
    <div className="   row  hori font-register">
      <h1 className="text-center register-m display-4 ">Register Now</h1>
      <div className="col  ">
        {/* <h3 className=" m-4 text-center">Candidate Details </h3> */}
        <form id="form" method="POST">
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                value={user.name}
                onChange={handleInput}
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                value={user.email}
                onChange={handleInput}
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-10">
              <input
                value={user.address}
                onChange={handleInput}
                type="text"
                className="form-control"
                name="address"
                id="address"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Age
            </label>
            <div className="col-sm-10">
              <input
                value={user.age}
                onChange={handleInput}
                type="number"
                className="form-control"
                name="age"
                id="age"
                placeholder="Age"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Mobile No.
            </label>
            <div className="col-sm-10">
              <input
                value={user.phone}
                onChange={handleInput}
                type="number"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Mobile No."
              />
            </div>
          </div>
          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Batch</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    value={"6:00 Am to 7:00 Am"}
                    onChange={handleInput}
                    className="form-check-input"
                    type="radio"
                    name="batch"
                    id="batch"
                    defaultValue="6:00 Am to 7:00 Am"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    6:00 Am to 7:00 Am
                  </label>
                </div>
                <div className="form-check">
                  <input
                    value={"7:00 Am to 8:00 Am"}
                    onChange={handleInput}
                    className="form-check-input
                        "
                    type="radio"
                    name="batch"
                    id="batch"
                    defaultValue="7:00 Am to 8:00 Am"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    7:00 Am to 8:00 Am
                  </label>
                </div>
                <div className="form-check ">
                  <input
                    value={"8:00 Am to 9:00 Am"}
                    onChange={handleInput}
                    className="form-check-input
                        "
                    type="radio"
                    name="batch"
                    id="batch"
                    defaultValue="8:00 Am to 9:00 Am"
                    disabled=""
                  />
                  <label className="form-check-label" htmlFor="gridRadios3">
                    8:00 Am to 9:00 Am
                  </label>
                </div>
                <div className="form-check ">
                  <input
                    value={"5:00 Pm to 6:00 Pm"}
                    onChange={handleInput}
                    className="form-check-input
                       "
                    type="radio"
                    name="batch"
                    id="batch"
                    defaultValue="5:00 Pm to 6:00 Pm"
                    disabled=""
                  />
                  <label className="form-check-label" htmlFor="gridRadios3">
                    5:00 Pm to 6:00 Pm
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    value={"Male"}
                    onChange={handleInput}
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="gridRadios1"
                    defaultValue="Male"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    value={"Female"}
                    onChange={handleInput}
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="gridRadios2"
                    defaultValue="Female"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Female
                  </label>
                </div>
                <div className="form-check disabled">
                  <input
                    value={"Other"}
                    onChange={handleInput}
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="gridRadios3"
                    defaultValue="Other"
                    disabled=""
                  />
                  <label className="form-check-label" htmlFor="gridRadios3">
                    Other
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <h1 className=" m-4 text-center">Payment Details </h1>

          <div classname="iconcontainer ">
            <h5> Accepted Cards</h5>
            <i className="fa fa-cc-visa" style={{ color: "navy" }} />
            <i className="fa fa-cc-amex" style={{ color: "blue" }} />
            <i className="fa fa-cc-mastercard" style={{ color: "red" }} />
            <i className="fa fa-cc-discover" style={{ color: "orange" }} />
          </div>

          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
              Name on Card
            </label>
            <div className="col-sm-9">
              <input
                value={user.cname}
                onChange={handleInput}
                type="text"
                className="form-control"
                name="cname"
                id="cname"
                placeholder="Name on Card"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
              Credit card number
            </label>
            <div className="col-sm-9">
              <input
                value={user.cnumber}
                onChange={handleInput}
                type="text"
                className="form-control"
                name="cnumber"
                id="ccnum"
                maxLength={16}
                placeholder="Credit card number"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
              Exp Month
            </label>
            <div className="col-sm-9">
              <input
                value={user.expmonth}
                onChange={handleInput}
                type="year"
                className="form-control"
                name="expmonth"
                id="expmonth"
                min={1}
                max={12}
                maxLength={2}
                placeholder="Exp Month"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
              Exp Year
            </label>
            <div className="col-sm-9">
              <input
                value={user.expyear}
                onChange={handleInput}
                type="year"
                className="form-control"
                name="expyear"
                id="expyear"
                maxLength={4}
                placeholder="Exp Year"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
              CVV
            </label>
            <div className="col-sm-9">
              <input
                value={user.cvv}
                onChange={handleInput}
                type="password"
                className="form-control"
                name="cvv"
                id="cvv"
                placeholder="CVV"
                maxLength={3}
              />
            </div>
          </div>
          <h4 className="mt-3 mb-3">
            Total Amount -- <span className="price_color_green"> ₹500 </span> /
            Month Only{" "}
          </h4>

          <div className="m-5">
            <div id="errorMessage" className="colorRed "></div>
          </div>
          <div className="form-group row text-center">
            <div className=" payNow mt-4">
              <button
                type="submit"
                className="btn btn-primary payNow"
                onClick={PostData}
              >
                Pay Now
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <div className="col-4 ">
        <img className="img-margin" src={register_img} alt="NOT FOUND" height="600" />
      </div> */}
    </div>
  );
};

export default Register;
