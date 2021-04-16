const router = require("express").Router();
const imageController = require("../../controllers/imageController");

// routes for /api/order/:id
router.route("/:id").delete(imageController.remove);

module.exports = router;
