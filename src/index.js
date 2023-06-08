const express = require('express')
const server = express()

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

server.listen(3000, () =>{
    console.log('Api rodando')
})
