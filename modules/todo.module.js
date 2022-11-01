const prisma = require('../helpers/databse');
const {join} = require('@prisma/client/runtime');
const Joi = require('joi');
class _todo{
    listTodo = async () => {
        try {
            const list = await prisma.todo.findMany()
            return {
                status: true,
                statusCode: 201,
                message: "Data Todo Berhasil Diambil",
                data: list
            }
        } catch (error) {
            console.error('list todo module error : ', error)
            return {
                status: false,
                error
            }
        }
    }

    createTodo = async (body) => {
        try {
            const schema = Joi.object({
                user_id: Joi.number().required(),
                description: Joi.string().required()
            }).options({
                abortEarly: false
            })
            const validation = schema.validate(body)
            if (validation.error) {
                const errorDetails = validation.error.details.map(detail => detail.message)
                return {
                    status: false,
                    code: 422,
                    error: errorDetails.join(', ')
                }
            }const newTodo = await prisma.todo.create({
                data: {
                    user_id: body.user_id,
                    description: body.description,
                }
            })
            return {
                status: true,
                statusCode: 201,
                message: "Data User Berhasil diBuat",
                data: newTodo
            }
        
        } catch (error) {
            console.error('create todo module error : ', error)
            return {
                status: false,
                error
            }
        }
    }

    updateTodo = async (body, id) => {
        try {
            const schema = Joi.object({
                description: Joi.string().required()
            }).options({
                abortEarly: false
            })
            const validation = schema.validate(body)
            if (validation.error) {
                const errorDetails = validation.error.details.map(detail => detail.message)
                return {
                    status: false,
                    code: 422,
                    error: errorDetails.join(', ')
                }
            }const newTodo = await prisma.todo.update({
                where:{
                    id: Number(id)
                },
                data: {
                    description: body.description,
                }
            })
            return {
                status: true,
                statusCode: 201,
                message: "Data User Berhasil DiUpdate",
                data: newTodo
            }
        
        } catch (error) {
            console.error('update todo module error : ', error)
            return {
                status: false,
                error
            }
        }
    }
    deleteTodo = async (id) => {
        try {
            const newTodo = await prisma.todo.delete({
                where:{
                    id: id
                },
                
            })
            return {
                status: true,
                statusCode: 201,
                message: "Data User Berhasil delete",
                data: newTodo
            }
        
        } catch (error) {
            console.error('delete todo module error : ', error)
            return {
                status: false,
                error
            }
        }
    }
}

module.exports = new _todo()