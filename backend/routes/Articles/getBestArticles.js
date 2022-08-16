const product = require("../../db/mockArticles");

module.exports = (app) =>
  app.get("/api/articles/bestArticles", (req, res) => {
    const result = product.products.filter(
      (product) => product.bestSelling === true
    );
    res.status(200).json({ message: "Produit trouvée", data: result });
  });
