const Announcement = require("../models/announcement");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const announcement = await Announcement.findById(id);
    if (announcement) {
      return res.json(announcement);
    }
    res.status(404).json({ message: "Announcement not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAnnouncement = async (req, res) => {
  try {
    const announcement = await new Announcement(req.body);
    await announcement.save();
    res.status(201).json(announcement);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateAnnouncement = async (req, res) => {
  const { id } = req.params;
  await Announcement.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (error, announcement) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!announcement) {
        return res.status(404).json({ message: "Announcement not found!" });
      }
      res.status(200).json(announcement);
    }
  );
};

const deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Announcement.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Announcement deleted");
    }
    throw new Error("Announcement not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAnnouncement,
  getAnnouncements,
  getAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
};
