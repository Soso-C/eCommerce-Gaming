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
        // Si existante alors on comparer le hash
        bcrypt.compare(password, user.password).then((isPasswordValid) => {
          // Si hash pas valide on return msg error
          if (!isPasswordValid) {
            const message = "Email ou mot de passe invalide";
            return res.status(404).json({ message });
          }

          // Si tout est ok alors on log et on créé un token
          // JWT
          const token = jwt.sign({ userid: user.id }, process.env.SECRET_KEY, {
            expiresIn: "24h",
          });

          const message = `L'utilisateur a été connecté avec succès`;
          const data = {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            lastname: user?.lastname,
            createdAt: user?.createdAt,
          };
          return res.status(201).json({ message, data, token });
        });
      })
      .catch((err) => {
        const message = `Connection impossible, réessayez dans un instant`;
        return res.status(500).json({ message, data: err });
      });
  });
};
