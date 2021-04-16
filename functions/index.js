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

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    // origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// allows mongoose to use atlas or local database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/foothillfitness",
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

exports.api = functions.https.onRequest(app);
