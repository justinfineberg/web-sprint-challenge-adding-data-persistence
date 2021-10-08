// build your `/api/projects` router here
const express = require("express")
const router = express.Router()
const { getProjects, addProject } = require('./model')
const db = require('../../data/dbConfig')

router.get("/", async(req, res, next)=>{
    try{
        const projects = await getProjects()
        res.json(projects)
    } catch (err){
        res.json(err)
    }
})

router.post("/", async(req, res, next)=>{
   
    try {
        const newProject = await addProject(req.body)
        console.log("newProject", newProject)
        res.json(newProject[0])
    } catch (err){
        res.status(500).json(err)
    }
})

module.exports = router