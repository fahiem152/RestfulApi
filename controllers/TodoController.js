const { Router } = require('express')
const m$todo = require('../modules/todo.module');
const response= require('../helpers/response')
const { userTodo } = require('../helpers/databse');
const userSession = require('../helpers/middleware');
const TodoController = Router()

// http://localhost:8000/api/todo
TodoController.get('/',userSession, async (req,res)=> {
     console.log(req.user)
    const list = await m$todo.listTodo({user_id: req.user.id})
    response.sendResponse(res, list)
})

 // http://localhost:8000/api/todo
 TodoController.post('/', userSession, async (req,res) => {
    console.log(req.user)
    //req body berisis data yang dikirim ke client
    const add = await m$todo.createTodo({user_id: req.user.id, description: req.body.description})
    response.sendResponse(res, add)
})

 // http://localhost:8000/api/todo/:id
 TodoController.put('/:id', async (req,res) => {
    const { id } = req.params
    const update = await m$todo.updateTodo(req.body, id)
    response.sendResponse(res, update)
})
 // http://localhost:8000/api/todo/:id
 TodoController.delete('/:id', async (req,res) => {
    const del = await m$todo.deleteTodo(Number(req.params.id))
    response.sendResponse(res, del)
})

module.exports = TodoController