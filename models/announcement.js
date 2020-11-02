const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Announcement = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, requried: true },
    userId: { type: Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("announcements", Announcement);
