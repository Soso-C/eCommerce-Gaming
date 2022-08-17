const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const port = 3001;
const cors = require("cors");
const db = require("./models");

// Main Middleware
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(morgan("dev"))
  .use(cors())
  .use(helmet());

// Articles Endpoint
require("./routes/Articles/getAllArticles")(app);
require("./routes/Articles/getNewArticles")(app);
require("./routes/Articles/getBestArticles")(app);
require("./routes/Articles/getArticleById")(app);

// Auth Endpoint
require("./routes/Auth/register")(app);
require("./routes/Auth/login")(app);

// Db and server initialization
db.sequelize
  .sync()
  .then((result) => {
    app.listen(port, () =>
      console.log(`Le serveur est actif sur le port: ${port}!`)
    );
    console.log("Connexion a la DB réussie");
  })
  .catch((err) => {
    console.log(err);
  });
