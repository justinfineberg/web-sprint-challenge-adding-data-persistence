// build your `Resource` model here
const knex = require("knex");
const db = require("../../data/dbConfig");

async function getResources() {
  const resource = await db("resources");
  return resource;
}

async function addResources(body) {
  const { resource_name, resource_description } = body;
  const returning = await db("resources").insert({
    resource_name,
    resource_description,
  });
  const answer = await db("resources").where("resource_id", returning[0]);
  return answer;
}

module.exports = {
  getResources,
  addResources,
};
