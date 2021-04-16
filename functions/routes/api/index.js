const router = require("express").Router();
const cardioRoutes = require("./cardio");
const strengthRoutes = require("./strength");
const brandRoutes = require("./brand");
const imageRoutes = require("./image");
const featuredRoutes = require("./featured");
const multerRoutes = require("./multer");

// Routes
router.use("/cardio", cardioRoutes);
router.use("/strength", strengthRoutes);
router.use("/brand", brandRoutes);
router.use("/image", imageRoutes);
router.use("/featured", featuredRoutes);
router.use("/multer", multerRoutes);

module.exports = router;
