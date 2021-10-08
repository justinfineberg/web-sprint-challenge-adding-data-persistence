// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const {getResourcebyId} = require('./model')

router.use('/', async (req, res, next)=>{
   try{
    const resource = await getResourcebyId()
    console.log('here')
    console.log(resource)
   }catch(err){
       res.json(err)
   }
})


module.exports = router;