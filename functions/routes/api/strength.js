const router = require("express").Router();
const strengthController = require("../../controllers/strengthController");

router.route("/").get(strengthController.findAll).post(strengthController.add);

// routes for /api/product/:id
router
  .route("/:id")
  .get(strengthController.findById)
  .put(strengthController.update)
  .delete(strengthController.remove);

module.exports = router;
