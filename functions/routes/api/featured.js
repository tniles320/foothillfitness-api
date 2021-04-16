const router = require("express").Router();
const featuredController = require("../../controllers/featuredController");

router.route("/").get(featuredController.findAll).post(featuredController.add);

// routes for /api/order/:id
router
  .route("/:id")
  .get(featuredController.findById)
  .put(featuredController.update)
  .delete(featuredController.remove);

module.exports = router;
