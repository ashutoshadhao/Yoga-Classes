const dotenv = require("dotenv");
const express = require("express");
const app = express();
const path = require("path");
dotenv.config({ path: "./config.env" });

require("./database/conn");
// const User = require('./model/userSchema');

app.use(express.json());
app.use(require("./router/auth.js"));

app.use(express.static(path.join(__dirname, "./frontend/build")));
// const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./frontend/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT} `);
});
