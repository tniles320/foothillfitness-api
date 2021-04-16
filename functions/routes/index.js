// const path = require("path"); // commented out for firebase
const router = require("express").Router();
const apiRoutes = require("./api");
const adminRoutes = require("./admin");

// API Routes
router.use("/api", apiRoutes);
router.use("/admin", adminRoutes);

// React app Route
// router.use(function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// }); // commented out for firebase

module.exports = router;
