const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/").get(userController.getUser);
router.route("/login").post(userController.login);
router.route("/register").post(userController.register);
router.route("/logout").post(userController.logout);

// routes for /api/user/:id
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
