const m$auth = require('../modules/auth.module')
const { Router } = require('express')

const response= require('../helpers/response')
const AuthController = Router()


// http://localhost:8000/login
AuthController.post('/', async (req,res)=>{
    const login = await m$auth.login(req.body)
    response.sendResponse(res,login)
})
module.exports=  AuthController