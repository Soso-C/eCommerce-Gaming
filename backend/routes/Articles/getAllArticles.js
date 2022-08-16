const product = require("../../db/mockArticles");

module.exports = (app) =>
  app.get("/api/articles", (req, res) => {
    res
      .status(200)
      .json({ message: "Liste de produits trouvée !", data: product });
  });
