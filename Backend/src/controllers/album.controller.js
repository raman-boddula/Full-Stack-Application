const express = require("express");

const router = express.Router();

const Album = require("../models/album.model");

router.post("/", async (req, res) => {
  try {
    const album = await Album.create(req.body);
    res.status(200).json({ album: album });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: e.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const albums = await Album.find().lean().exec();
    res.status(200).json({ albums: albums });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: e.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const album = await Album.findById(req.params.id).lean().exec();
    res.status(200).json({ album: album });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: e.message });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const album = await Album.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    res.status(200).json({ album: album });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: e.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const album = await Album.findByIdAndDelete(req.params.id).lean().exec();
    res.status(200).json({ album: album });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: e.message });
  }
});
module.exports = router;
