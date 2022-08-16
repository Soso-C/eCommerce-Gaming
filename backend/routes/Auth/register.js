require("dotenv").config();
const bcrypt = require("bcrypt");
const { Users } = require("../../models/Users");

module.exports = (app) => {
  app.post("/api/auth/register", (req, res) => {
    const { email, password, name, lastname } = req.body;

    bcrypt.hash(password, 10).then((hash) => {
      Users.create({
        name: name,
        password: hash,
        email: email,
        lastname: lastname,
      });
      res.send("Success");
    });
  });
};
