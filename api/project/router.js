// build your `/api/projects` router here
const express = require("express");
const router = express.Router();
const { getProjects, addProject } = require("./model");
const db = require("../../data/dbConfig");

router.get("/", async (req, res, next) => {
  try {
    const projects = await getProjects();
    let newarr = projects.map((item) => {
      if (item.project_completed == 0) {
        item.project_completed = false;
        return item;
      } else {
        item.project_completed = true;
        return item;
      }
    });
    res.json(projects);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newProject = await addProject(req.body);
    if (newProject[0].project_completed == 0) {
      newProject[0].project_completed = false;
    } else {
      newProject[0].project_completed = true;
    }
    res.json(newProject[0]);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
