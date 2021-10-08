// build your `Task` model here
const db = require("../../data/dbConfig");

async function getTasks() {
  const test = await db("tasks").join(
    "projects",
    "tasks.project_id",
    "projects.project_id"
  );
  return test;
}

async function newTask(body) {
  const returning = await db("tasks").insert(body);
  const answer = await db("tasks").where("task_id", returning[0]);
  return answer;
}

module.exports = { getTasks, newTask };
