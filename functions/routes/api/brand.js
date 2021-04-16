const router = require("express").Router();
const brandController = require("../../controllers/brandController");

router.route("/").get(brandController.findAll).post(brandController.add);

// routes for /api/order/:id
router
  .route("/:id")
  .get(brandController.findById)
  .put(brandController.update)
  .delete(brandController.remove);

module.exports = router;
