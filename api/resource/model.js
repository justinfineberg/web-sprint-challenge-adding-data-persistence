// build your `Resource` model here
const knex = require('knex')
const db = require('../../data/dbConfig')

async function getResourcebyId(){
    const resource = await db('resources')
    return resource
}

module.exports = {
    getResourcebyId
}