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
    })
      .then((user) => {
        // Si il y a pas d'user avec cette email alors on créé le compte
        if (!user) {
          bcrypt.hash(password, 10).then((hash) => {
            User.create({
              password: hash,
              email,
              name,
              lastname,
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
          });
        }
        // else
        return res.status(400).json({ message: "Email déja existante" });
      })
      .catch((err) => {
        const message = `Connection impossible, réessayez dans un instant`;
        return res.status(500).json({ message, data: err });
      });
  });
};
