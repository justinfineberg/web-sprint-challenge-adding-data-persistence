// build your `/api/tasks` router here
const express = require("express")
const router = express.Router()
const { getTasks } = require('./model')
const db = require('../../data/dbConfig')

router.get('/', async(req,res,next)=>{
    try{
        const tasks = await getTasks()
            res.json(tasks)
        
    } catch (err){
        res.json(err)
    }
})

module.exports = router