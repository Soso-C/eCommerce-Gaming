const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const port = 3001;
const cors = require("cors");
const db = require("./models");

// Db and server initialization
db.sequelize
  .sync()
  .then((result) => {
    app.listen(port, () => console.log(`Server running on port:  ${port}!`));
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Middleware
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(morgan("dev"))
  .use(cors())
  .use(helmet());

// Articles Routes
require("./routes/Articles/getAllArticles")(app);
require("./routes/Articles/getNewArticles")(app);
require("./routes/Articles/getBestArticles")(app);
require("./routes/Articles/getArticleById")(app);
