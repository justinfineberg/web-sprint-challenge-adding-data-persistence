// build your `Project` model here
const knex = require('knex')
const db = require('../../data/dbConfig')

async function getProjects(){
    const projects = await db("projects");
    return projects;
}

async function addProject(body){
    const { project_name, project_description, project_completed } = body;
    const returning = await db('projects').insert(body)
    console.log(returning)
    const answer = await db("projects").where("project_id", returning[0])
    console.log(answer)
    return answer
}

module.exports = {
    getProjects,
    addProject
}