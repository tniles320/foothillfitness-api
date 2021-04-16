// const fs = require("fs");
const AWS = require("aws-sdk");

module.exports = {
  remove: function (req, res) {
    const image = req.params.id;

    // try {
    //   fs.unlinkSync(`public/uploads/${image}`);
    //   //file removed
    // } catch (err) {
    //   console.error(err);
    // }

    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    });

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: image,
    };

    s3.deleteObject(params, (error, data) => {
      if (error) {
        res.status(500).send(error);
      }
      res.status(200).send("File has been deleted successfully");
    });
  },
};
