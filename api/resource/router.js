// build your `/api/resources` router here
const express = require("express");
const router = express.Router();
const { getResources, addResources } = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const resource = await getResources();
    res.json(resource);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newResource = await addResources(req.body);
    res.json(newResource[0]);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
