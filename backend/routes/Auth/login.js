require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
module.exports = (app) => {
  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    // On cherche si l'email est existant dans notre db
    User.findOne({ where: { email } })
      .then((user) => {
        // Si pas existant alors on return un msg error
        if (!user) {
          const message = "Email ou mot de passe invalide";
          return res.status(404).json({ message });
        }
        // Si existant alors on compare le hash
        bcrypt.compare(password, user.password).then((isPasswordValid) => {
          // Si hash pas valide on return msg error
          if (!isPasswordValid) {
            const message = "Email ou mot de passe invalide";
            return res.status(404).json({ message });
          }

          // JWT accessToken
          const accessToken = jwt.sign(
            {
              userInfo: {
                id: user?.id,
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
                id: user?.id,
              },
            },
            process.env.REFRESH_SECRET_KEY,
            {
              expiresIn: "1d",
            }
          );

          const message = `L'utilisateur a été connecté avec succès`;
          const data = {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            lastname: user?.lastname,
            createdAt: user?.createdAt,
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
      })
      .catch((err) => {
        const message = `Connection impossible, réessayez dans un instant`;
        return res.status(500).json({ message, data: err });
      });
  });
};
