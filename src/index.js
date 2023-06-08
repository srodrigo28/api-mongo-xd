const express = require('express')
const server = express()
server.use(express.json())

const TaskRoutes = require('./routes/TaskRoutes');
const UserRoutes = require('./routes/UserRoutes');

server.use('/task', TaskRoutes);
server.use('/user', UserRoutes);

server.listen(3000, () =>{
    console.log('Api rodando')
})
