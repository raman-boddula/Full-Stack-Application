const express = require("express");

const router = express.Router();

const Songs = require("../models/songs.model");

router.post("/", async (req, res) => {
  try {
    const songs = await Songs.create(req.body);
    res.status(200).json({ songs: songs });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: e.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const songs = await Songs.find()
      .populate("album_id")
      .populate("singer_id")
      .lean()
      .exec();
    res.status(200).json({ songs: songs });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: e.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const songs = await Songs.findById(req.params.id)
      .populate("album_id")
      .populate("singer_id")
      .lean()
      .exec();
    res.status(200).json({ songs: songs });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: e.message });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const songs = await Songs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .populate("album_id")
      .populate("singer_id")
      .lean()
      .exec();
    res.status(200).json({ songs: songs });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: e.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const songs = await Songs.findByIdAndDelete(req.params.id).lean().exec();
    res.status(200).json({ songs: songs });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: e.message });
  }
});
module.exports = router;
