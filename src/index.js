const express = require('express')
const server = express()

server.get('/teste', (req, res) =>{
    res.send('Bem vindo api')
})

server.listen(3000, () =>{
    console.log('Api rodando')
})