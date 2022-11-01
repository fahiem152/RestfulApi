// Mapping function dari module ke api

const { Router } = require('express')
const m$user = require('../modules/user.module')
const response= require('../helpers/response')
const { userTodo } = require('../helpers/databse')
const UserController = Router()

 // http://localhost:8000/api/users
UserController.get('/', async (req,res) => {
    const list = await m$user.listUser()
    response.sendResponse(res, list)
})

// http://localhost:8000/api/users/:id
UserController.get('/:id', async (req,res) => {
    const { id } = req.params
    const listid = await m$user.listUserbyId(id)
    response.sendResponse(res, listid)
})

 // http://localhost:8000/api/users
UserController.post('/', async (req,res) => {
    //req body berisis data yang dikirim ke client
    const add = await m$user.createUser(req.body)
    response.sendResponse(res, add)
})

UserController.put('/:id', async (req,res) => {
    const { id } = req.params
    //req body berisis data yang dikirim ke client
    const update = await m$user.updateUser(req.body, id)
    response.sendResponse(res, update)
})

UserController.delete('/:id', async (req,res) => {
    const { id } = req.params
    //req body berisis data yang akan di dikirim ke client
    const del = await m$user.deleteUser(id)
    response.sendResponse(res, del)
})

module.exports = UserController