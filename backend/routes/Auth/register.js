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
        // Si il y a pas d'user avec cette email alors on hash pwd + créé le compte
        if (!user) {
          bcrypt.hash(password, 10).then((hash) => {
            User.create({
              password: hash,
              email,
              name,
              lastname,
            })
              // Une fois le compté créé on récupere les données de l'user et on crée un token
              .then((createdUser) => {
                // JWT
                const token = jwt.sign(
                  { id: createdUser.id },
                  process.env.SECRET_KEY,
                  {
                    expiresIn: "24h",
                  }
                );

                const data = {
                  id: createdUser?.id,
                  name: createdUser?.name,
                  email: createdUser?.email,
                  lastname: createdUser?.lastname,
                };

                const message = `L'utilisateur a été créé avec succès`;

                return res.status(200).json({
                  message,
                  data,
                  token,
                });
              });
          });
        }
        // Si email est déja existant alors
        else {
          return res.status(404).json({ message: "Email déja existante" });
        }
      })
      .catch((err) => {
        const message = `Connection impossible, réessayez dans un instant`;
        return res.status(500).json({ message, data: err });
      });
  });
};
