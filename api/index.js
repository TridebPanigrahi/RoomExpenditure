const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require('multer');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const {fileURLToPath} = require('url')


const server = express()

server.use(cors())
server.use(bodyParser.json())

server.post('/usersData', async(req, res)=>{
    console.log(req.body)
    let data = await req.body
    res.json(data)
})

server.listen(8080, ()=>{
    console.log("Server Started")
})
