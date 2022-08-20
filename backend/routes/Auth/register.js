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
              // Une fois le compte créé on récupere les données de l'user et on créé un token
              .then((createdUser) => {
                // JWT accessToken
                const accessToken = jwt.sign(
                  {
                    userInfo: {
                      id: createdUser?.id,
                      roles: "user",
                    },
                  },
                  process.env.SECRET_KEY,
                  {
                    expiresIn: "1h",
                  }
                );

                //JWT RefreshToken
                const refreshToken = jwt.sign(
                  {
                    userInfo: {
                      id: createdUser?.id,
                    },
                  },
                  process.env.REFRESH_SECRET_KEY,
                  {
                    expiresIn: "1d",
                  }
                );

                const message = `L'utilisateur a été connecté avec succès`;
                const data = {
                  id: createdUser?.id,
                  name: createdUser?.name,
                  email: createdUser?.email,
                  lastname: createdUser?.lastname,
                  createdAt: createdUser?.createdAt,
                  roles: "user",
                };
                return (
                  res.cookie("jwt", refreshToken, {
                    httpOnly: true,
                    sameSite: "None",
                    maxAge: 24 * 60 * 60 * 1000,
                  }),
                  res.status(201).json({ message, data, accessToken })
                );
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
