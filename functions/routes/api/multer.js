const router = require("express").Router();
const multer = require("multer");
const AWS = require("aws-sdk");
const functions = require("firebase-functions");

require("dotenv").config();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single("file"), function (req, res) {
  const file = req.file;
  const fileName = Date.now() + "-" + file.originalname;

  const AWS_ACCESS_KEY = functions.config().foothillfitness.aws_access_key;
  const AWS_SECRET_KEY = functions.config().foothillfitness.aws_secret_key;
  const AWS_REGION = functions.config().foothillfitness.aws_region;
  const AWS_BUCKET_NAME = functions.config().foothillfitness.aws_bucket;

  const s3 = new AWS.S3({
    // accessKeyId: process.env.AWS_ACCESS_KEY,
    // secretAccessKey: process.env.AWS_SECRET_KEY,
    // region: process.env.AWS_REGION,
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
    region: AWS_REGION,
  });

  // Where you want to store your file

  const params = {
    // Bucket: process.env.AWS_BUCKET_NAME,
    Bucket: AWS_BUCKET_NAME,
    Key: fileName,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read",
  };

  s3.upload(params, function (err, data) {
    if (err) {
      res.status(500).json({ error: true, Message: err });
    } else {
      res.json(fileName).status(200);
    }
  });
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// //Init Upload
// const upload = multer({
//   storage: storage,
// }).single("file");

// router.post("/", function (req, res) {
//   upload(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//       console.log("MulterError", err);
//       res.status(403);
//     } else if (err) {
//       console.log("UnhandledError", err);
//       res.status(403);
//     } else {
//       res.json(req.file).status(200);
//     }
//   });
// });

module.exports = router;
