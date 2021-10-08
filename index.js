// start your server here
const server = require('./api/server')

const port = 8888;

server.listen(port, ()=>{
    console.log('server up on 8888')
})