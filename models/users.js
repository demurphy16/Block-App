const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailAddress: { type: String, required: true },
    cityTown: { type: String, requried: true },
    state: { type: String, requried: true },
    password: { type: String, requried: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);