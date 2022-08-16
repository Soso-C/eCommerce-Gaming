const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = 3001;
const product = require("./db/mockArticles");
const cors = require("cors");
const db = require("./models");

db.sequelize
  .sync()
  .then((result) => {
    app.listen(port, () => console.log(`Server running on port:  ${port}!`));
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.get("/articles", (req, res) => {
  res
    .status(200)
    .json({ message: "Liste de produits trouvée !", data: product });
});

app.get("/articles/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const result = product.products.find((product) => id === product.id);
  res.status(200).json({ message: "Produit trouvée", data: result });
});

app.get("/newArticles", (req, res) => {
  const result = product.products.filter(
    (product) => product.newProduct === true
  );
  res.status(200).json({ message: "Produit trouvée", data: result });
});

app.get("/bestArticles", (req, res) => {
  const result = product.products.filter(
    (product) => product.bestSelling === true
  );
  res.status(200).json({ message: "Produit trouvée", data: result });
});
