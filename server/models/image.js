const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;

console.log("connecting to", url);

mongoose
  .connect(url)
  .then(() => console.log("connected to MongoDB"))
  .catch((error) => console.log("error connection to MongoDB:", error.message));

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: [true, "name is required"],
  },
  url: {
    type: String,
    minlength: 3,
    required: [true, "photo URL is required"],
    validate: {
      validator: (v) =>
        /^(https:\/\/(www\.)?images\.unsplash\.com\/photo-)[a-z0-9]+(?:[-.][a-z0-9][\S]+)*$/.test(
          v
        ),
      message: "{VALUE} is not a valid unsplash URL",
    },
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

imageSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Image", imageSchema);
