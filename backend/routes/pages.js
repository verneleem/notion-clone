const express = require("express");

const pagesController = require("../controllers/pages");

const router = express.Router();

// POST /pages/images
router.post("/images", pagesController.postImage);

// DELETE /pages/images/{name}
router.delete("/images/:imageName", pagesController.deleteImage);

module.exports = router;
