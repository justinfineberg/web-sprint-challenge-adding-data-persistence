// build your server here and require it from index.js
const express = require('express')
const server = express();
server.use(express.json())


const ResourceRouter = require('../api/resource/router')

server.use('/api/resources', ResourceRouter)


server.use("*", (req, res, next, err)=>{
    res.json("error somewhere")
})

module.exports = server;