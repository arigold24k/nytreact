const router = require("express").Router();
const articleRoutes = require("./SArticles");

// Book routes
router.use("/articles", articleRoutes);

module.exports = router;
