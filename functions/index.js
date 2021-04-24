const express = require("express");
const cors = require("cors");
// const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
// const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const functions = require("firebase-functions");
// const PORT = process.env.PORT || 3001;

const MONGODB_URI = functions.config().foothillfitness.mongodb_uri;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // "https://foothillfitness.com", // <-- location of the react app were connecting to
    credentials: true,
  })
);

// Serve up static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// allows mongoose to use atlas or local database
mongoose.connect(
  // process.env.MONGODB_URI || "mongodb://localhost/foothillfitness",
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport);

app.use("*", function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "https://foothillfitness.com");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// enable pre-flight
app.options("*", cors());

// const directory = path.join(__dirname, "public/uploads");
// app.use("/public/uploads", express.static(directory));

// require("dotenv").config();

// app.get("/api/upload/:file", function (req, res) {
//   const s3FileURL = process.env.AWS_Uploaded_File_URL_LINK;
//   res.sendFile(s3FileURL + req.params.file);
// });

// using api routes
app.use(routes);

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });

exports.app = functions.https.onRequest(app);
