// build your `Project` model here
const knex = require("knex");
const db = require("../../data/dbConfig");

async function getProjects() {
  const projects = await db("projects");
  return projects;
}

async function addProject(body) {
  const { project_name, project_description, project_completed } = body;
  const newProjectId = await db("projects").insert(body);
  const newProject = await db("projects").where("project_id", newProjectId[0]);
  return newProject;
}

module.exports = {
  getProjects,
  addProject,
};
