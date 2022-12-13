const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Hello world from router ");
// });

require("../database/conn");
const User = require("../model/userSchema");

router.post("/register", async (req, res) => {
  const { name, email, phone, gender, age, address, batch } = req.body;

  //  Validation
  if (!name || !email || !phone || !gender || !age || !address || !batch) {
    return res.status(422).json({
      error: "Please Fill All The Details ",
    });
  }
  //  Age Validation
  if (age < 18) {
    return res.status(400).json({
      error: "You Are UNDER AGE FOR REGISTRATION. Valid Age IS 18 TO 65 YEARS",
    });
  }
  if (age > 65) {
    return res.status(400).json({
      error: "You Are OVER AGE FOR REGISTRATION. Valid Age IS 18 TO 65 YEARS",
    });
  }

  // Phone Number Validation
  const txtPhoneNumber = phone.toString();
  if (
    txtPhoneNumber.length != 10 ||
    (txtPhoneNumber[0] != "9" &&
      txtPhoneNumber[0] != "8" &&
      txtPhoneNumber[0] != "7")
  ) {
    return res.status(400).json({
      error: "Enter Valid Phone Number ",
    });
  }

  //   Email Validation
  if (email.indexOf("@") <= 0) {
    return res.status(400).json({
      error: "Enter Valid Email ",
    });
  }
  if (email[email.length - 4] != "." && email[email.length - 3] != ".") {
    return res.status(400).json({
      error: "Enter Valid Email ",
    });
  }

  const user = new User({ name, email, phone, gender, age, address, batch });
  const userRegister = await user.save();
  if (userRegister) {
    return res.status(200).json({
      message: " Application Submited ",
    });
  } else {
    return res.status(422).json({
      error: " Application Failed ",
    });
  }
});

module.exports = router;
