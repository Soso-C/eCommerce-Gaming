const product = require("../../db/mockArticles");

module.exports = (app) =>
  app.get("/api/articles/newArticles", (req, res) => {
    const result = product.products.filter(
      (product) => product.newProduct === true
    );
    res.status(200).json({ message: "Produit trouvée", data: result });
  });
