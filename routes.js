const UserController = require("./controllers/UserController")
const TodoController = require("./controllers/TodoController")
const AuthController = require("./controllers/AuthController")

const _routes = [ 
    // http://localhost:8000/api/users
    ['users', UserController],

    // http://localhost:8000/api/todo
    ['todo', TodoController],

    // http://localhost:8000/api/login
    ['login', AuthController]
]
const routes = (app) => {
    _routes.forEach(route =>{
        const [url, controller] = route

        // http://localhost:8000/api
        app.use(`/api/${url}`, controller)
    })
}
module.exports = routes