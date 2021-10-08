// build your `/api/tasks` router here
const express = require("express")
const router = express.Router()
const { getTasks, newTask } = require('./model')
const db = require('../../data/dbConfig')

router.get('/', async(req,res,next)=>{
    try{
        const tasks = await getTasks()
        let newarr = tasks.map(item=>{
            if (item.task_completed == 0){
                item.task_completed = false
                return item
            } else {
                item.task_completed = true
                return item
            }
        })
            res.json(newarr)
        
    } catch (err){
        res.json(err)
    }
})

router.post("/", async(req,res,next)=>{
   
    try {
        const adding = await newTask(req.body)
        if (adding[0].task_completed == 0){
            adding[0].task_completed = false
        } else {
            adding[0].task_completed = true
        }
        res.json(adding[0])
    } catch (err){
        res.status(500).json(err)
    }
})

module.exports = router