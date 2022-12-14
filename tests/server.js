const express = require('express');
const cors = require('cors');
const routes = require('../routes')


const app = express();
const port = 8000;



// Module Cors, Form data, and json
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// // Rest Api Routes
// app.get('/', async(req, res)=> {
//     res.send({
//         status: true,
//         message: 'Hello this is API from express tutoruial RestFul API'
//     });
// })

// ROUTES API
routes(app)


module.exports= app

