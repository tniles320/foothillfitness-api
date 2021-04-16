const router = require("express").Router();
const cardioController = require("../../controllers/cardioController");

router.route("/").get(cardioController.findAll).post(cardioController.add);

// routes for /api/product/:id
router
  .route("/:id")
  .get(cardioController.findById)
  .put(cardioController.update)
  .delete(cardioController.remove);

module.exports = router;
