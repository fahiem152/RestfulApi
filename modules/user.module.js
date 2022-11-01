// Module berisi fungsi fungsi query ke database

const prisma = require('../helpers/databse');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const {
    join
} = require('@prisma/client/runtime');
const { number } = require('joi');
const salt = bcrypt.genSaltSync(10);

class _user {
    listUser = async () => {
        try {
            const list = await prisma.userTodo.findMany()
            return {
                status: true,
                statusCode: 201,
                message: "Data User Berhasil Diambil",
                data: list
            }
        } catch (error) {
            console.error('list user module error : ', error)
            return {
                status: false,
                error
            }
        }
    }

    listUserbyId = async (id) => {
        try {
            const listid = await prisma.userTodo.findUnique({
                where: {
                    id: Number(id)
                },
                include:{
                    todo: true
                }
            })
            return {
                status: true,
                statusCode: 201,
                message: "Data User Berhasil Diambil berdasarkan Id",
                data: listid
            }
        } catch (error) {
            console.error('list user by id module error : ', error)
            return {
                status: false,
                error
            }
        }
    }

    createUser = async (body) => {
        try {
            const schema = Joi.object({
                name: Joi.string().required(),
                email: Joi.string().required(),
                password: Joi.string().required()
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
            }
            const newUserTodo = await prisma.userTodo.create({
                data: {
                    name: body.name,
                    email: body.email,
                    password: bcrypt.hashSync(body.password, salt)
                }
            })
            return {
                status: true,
                statusCode: 201,
                message: "Data User Berhasil diBuat",
                data: newUserTodo
            }
        } catch (error) {
            console.error('createUser module error : ', error)
            return {
                status: false,
                error
            }
        }
    }

    updateUser = async (body, id) => {
        try {
            const schema = Joi.object({
                name: Joi.string(),
                email: Joi.string(),
                password: Joi.string()
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
            }
            const updateUserTodo = await prisma.userTodo.update({
                where:{
                    id: Number(id)
                },
                data: {
                    name: body.name,
                    email: body.email,
                    password: bcrypt.hashSync(body.password, salt)
                }
            })
            return {
                status: true,
                statusCode: 201,
                message: "Data User Berhasil diUpdate",
                data: updateUserTodo
            }
        } catch (error) {
            console.error('UpdateUser module error : ', error)
            return {
                status: false,
                error
            }
        }
    }

    deleteUser = async (id) => {
        try {
            const deleteUserTodo = await prisma.userTodo.delete({
                where:{
                    id: Number(id)
                },
            })
            return {
                status: true,
                statusCode: 201,
                message: "Data User Berhasil Dihapus",
                data: deleteUserTodo
            }
        } catch (error) {
            console.error('DeleteUser module error : ', error)
            return {
                status: false,
                error
            }
        }
    }
}
module.exports = new _user()