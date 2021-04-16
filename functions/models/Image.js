const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  strength: {
    type: Schema.Types.ObjectId,
    ref: "Strength",
  },
  cardio: {
    type: Schema.Types.ObjectId,
    ref: "Cardio",
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Dealer",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  featured: {
    type: Schema.Types.ObjectId,
    ref: "Featured",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
