// build your `/api/tasks` router here
const express = require("express");
const router = express.Router();
const { getTasks, newTask } = require("./model");
const db = require("../../data/dbConfig");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await getTasks();
    let updatedTasks = tasks.map((item) => {
      if (item.task_completed == 0) {
        item.task_completed = false;
        return item;
      } else {
        item.task_completed = true;
        return item;
      }
    });
    res.json(updatedTasks);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const updatedTask = await newTask(req.body);
    if (updatedTask[0].task_completed == 0) {
      updatedTask[0].task_completed = false;
    } else {
      updatedTask[0].task_completed = true;
    }
    res.json(updatedTask[0]);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
