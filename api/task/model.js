// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks(){
    const test = await db('tasks')
    .join('projects', 'tasks.project_id', 'projects.project_id')
    return test
    
}

module.exports = {getTasks}