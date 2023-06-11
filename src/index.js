const express = require('express')
const cors = require('cors')
const server = express()
server.use(cors())
server.use(express.json())

const TaskRoutes = require('./routes/TaskRoutes');
const UserRoutes = require('./routes/UserRoutes');
const ContaRoutes = require('./routes/ContaRoutes')

server.use('/task', TaskRoutes);
server.use('/user', UserRoutes);
server.use('/conta', ContaRoutes);

server.listen(3000, () =>{
    console.log('Api rodando')
})
