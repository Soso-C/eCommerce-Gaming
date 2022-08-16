const product = require("../../db/mockArticles");

module.exports = (app) =>
  app.get("/api/articles/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const result = product.products.find((product) => id === product.id);
    res.status(200).json({ message: "Produit trouvée", data: result });
  });
