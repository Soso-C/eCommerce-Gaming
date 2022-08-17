require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");

module.exports = (app) => {
  app.post("/api/auth/register", (req, res) => {
    const { email, password, name, lastname } = req.body;
    // On vérifie si l'user est déja existant
    User.findOne({
      where: {
        email,
      },
    }).then((user) => {
      // Si il y a pas d'user avec cette email alors on créé le compte
      if (!user) {
        bcrypt.hash(password, 10).then((hash) => {
          User.create({
            password: hash,
            email,
          });
        });
        return res.status(201).json({
          token: jwt.sign(
            {
              email,
              name,
            },
            process.env.SECRET_KEY,
            { expiresIn: "24h" }
          ),
        });
      }
      return res.status(404).json({ msg: "Email déja existante" });
    });
  });
};
