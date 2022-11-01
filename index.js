const express = require('express');
const cors = require('cors');
const routes = require('./routes')
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');


const app = express();
const port = 8000;
// const salt = bcrypt.genSaltSync(10);


// Module Cors, Form data, and json
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rest Api Routes
app.get('/', async(req, res)=> {
    res.send({
        status: true,
        message: 'Hello this is API from express tutoruial RestFul API'
    });
})

// ROUTES API
routes(app)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port} `);
});



// // Membuat Api create user method POST
// app.post('/api/users', async ( req, res )=>{
//     try {
//         const { name, email, password } = req.body
//         const newUserTodo = await prisma.userTodo.create({
//             data: {
//                 name: name,
//                 email: email,
//                 password: bcrypt.hashSync(password, salt)
//             }
//         })
//         res.send({
//             statusCode: 200,
//             message: "Data User Berhasil di tambahkan",
//             data: newUserTodo
//         })
//         // res.json(result)
//     } catch (error) {
//         console.log(error.message)
//         res.send({
//             statusCode: 500,
//             message: "Error Create UserTodo ",
//         })
//     }
// })

// // Membuat Api Ambil data  user method GET
// app.get('/api/users', async ( req, res )=>{
//     try {    
//         const getUserTodo = await prisma.userTodo.findMany()
//         res.send({
//             statusCode: 200,
//             message: "Data User Berhasil di Panggil",
//             data: getUserTodo
//         })
//         // res.json(result)
//     } catch (error) {
//         console.log(error.message)
//         res.send({
//             statusCode: 500,
//             message: "ada kesalahan pada saat Pemanggilan data"
//         })
//     }
// })

// // Membuat Api Update data  user method PUT
// app.put('/api/users/:id', async ( req, res )=>{
//     const { name, email, password } = req.body
//     const {id} = req.params
//     try {
//         const updateUserTodo = await prisma.userTodo.update({
//             where: {
//                 id: Number(id)
//             },
//             data:{
//                 name: name,
//                 email: email,
//                 password: bcrypt.hashSync(password, salt)
//             }
//         })
//         res.send({
//             statusCode: 200,
//             message: "Data User Berhasil di Update",
//             data: updateUserTodo
//         })
//         // res.json(result)
//     } catch (error) {
//         console.log(error.message)
//         res.send({
//             statusCode: 500,
//             message: "ada kesalahan pada saat Update data"
//         })
//     }
// })


// // Membuat Api Delete data  user method DELETE
// app.delete('/api/users/:id', async ( req, res )=>{
//     const {id} = req.params
//     try {
//         const deleteUserTodo = await prisma.userTodo.delete({
//             where: {
//                 id: Number(id)
//             },
//         })
//         res.send({
//             statusCode: 200,
//             message: "Data User Berhasil di Delete",
//             data: deleteUserTodo
//         })
//         // res.json(result)
//     } catch (error) {
//         console.log(error.message)
//         res.send({
//             statusCode: 500,
//             message: "ada kesalahan pada saat DELETE data"
//         })
//     }
// })

// //=====================================================


// // Membuat Api create Todo method POST
// app.post('/api/todo', async ( req, res )=>{
//     try {
//         const { description, user_id } = req.body
//         // const { user_id } = req.params
//         const newTodo = await prisma.todo.create({
            
//             data: {
//                 user_id: user_id,
//                 description: description
//             }
//         })
//         res.send({
//             statusCode: 200,
//             message: "Data TODO Berhasil di tambahkan",
//             data: newTodo
//         })
//         // res.json(result)
//     } catch (error) {
//         console.log(error.message)
//         res.send({
//             statusCode: 500,
//             message: "Error Create Todo ",
//         })
//     }
// })


// // Membuat Api Mengambil LIST Todo  method GET
// app.get('/api/todo', async ( req, res )=>{
//     try {
//         const listsTodo = await prisma.todo.findMany()
//         res.send({
//             statusCode: 200,
//             message: "Data TODO Berhasil di Dapatkan",
//             data: listsTodo
//         })
//         // res.json(result)
//     } catch (error) {
//         console.log(error.message)
//         res.send({
//             statusCode: 500,
//             message: "Error LIstsTodo ",
//         })
//     }
// })


// // Membuat Api Mengambil LIST Todo berdasarakan User method GET
// app.get('/api/todo/:id', async ( req, res )=>{
//     try {
//         const {id} = req.params
//         const listTodo = await prisma.userTodo.findUnique({
//             where:{
//                 id: Number(id)
//             },
//             include:{
//                 todo: true
//             }
//         })
        
//         res.send({
//             statusCode: 200,
//             message: "Data TODO berdasarkan user Berhasil di Dapatkan",
//             data: listTodo
//         })
//         // res.json(result)
//     } catch (error) {
//         console.log(error.message)
//         res.send({
//             statusCode: 500,
//             message: "Error LIstTodo ",
//         })
//     }
// })



// // Membuat Api MengUpdate  LIST Todo  method PUT
// app.put('/api/todo/:id', async ( req, res )=>{
//     try {
//         const {description} = req.body
//         const {id} = req.params
//         const updateTodo = await prisma.todo.update({
//             where:{
//                 id: Number(id)
//             },
//             data:{
//                 description: description
//             }
//         })
        
//         res.send({
//             statusCode: 200,
//             message: "Data TODO  Berhasil di Update",
//             data: updateTodo
//         })
//         // res.json(result)
//     } catch (error) {
//         console.log(error.message)
//         res.send({
//             statusCode: 500,
//             message: "Error Update Todo ",
//         })
//     }
// })



// // Membuat Api MengUpdate  LIST Todo  method PUT
// app.delete('/api/todo/:id', async ( req, res )=>{
//     try {

//         const {id} = req.params
//         const deleteTodo = await prisma.todo.delete({
//             where:{
//                 id: Number(id)
//             },
//         })
        
//         res.send({
//             statusCode: 200,
//             message: "Data TODO  Berhasil di DELETE",
//             data: deleteTodo
//         })
//         // res.json(result)
//     } catch (error) {
//         console.log(error.message)
//         res.send({
//             statusCode: 500,
//             message: "Error Delete Todo ",
//         })
//     }
// })







// // mengambil data user dari database user
// app.get('/users', async (req,res)=> {
//     const users = await prisma.userTodo.findMany();
//     res.json(users);
// })

// // Mengambil data user berdasarak id user dari database user
// app.get('/users/:id', async (req,res)=> {
//     const  id  = req.params.id
//     const users = await prisma.userTodo.findUnique({
//         where: { id: Number(id)},
//         select: {
//             id: true,
//             name: true,
//             email: true
//         }
// });
//     res.json(users);
// })

// // mengambil data todo dari database todoList
// app.get('/todos', async (req,res)=> {
//     const users = await prisma.todo.findMany();
//     res.json(users);
// })

// // Mengambil data todo berdasarkan id todo dari database user
// app.get('/todos/:id', async (req,res)=> {
//     const  id  = req.params.id
//     const users = await prisma.todo.findUnique({
//         where: { id: Number(id)},
//         select: {
//             id: true,
//             user_id: true,
//             description: true
//         }
// });
//     res.json({users});
// })





// // const prisma = new PrismaClient();

// // async function main() {
// //     //     await prisma.userTodo.createMany({
// //     //         data: [{
// //     //             email: 'aulia@prisma.io',
// //     //             name: 'Aulia',
// //     //             password: bcrypt.hashSync("a123456789", salt),

// //     //         },{
// //     //             email: 'safina@prisma.io',
// //     //             name: 'Safina',
// //     //             password: bcrypt.hashSync("ab123456789", salt),

// //     //         },{
// //     //             email: 'ahmada@prisma.io',
// //     //             name: 'Ahmad',
// //     //             password: bcrypt.hashSync("abc123456789", salt),

// //     //         },{
// //     //             email: 'fahiem@prisma.io',
// //     //             name: 'Fahiem',
// //     //             password: bcrypt.hashSync("abcd123456789", salt),

// //     //         }]
// //     //     });
// //     //     const allUsers = await prisma.userTodo.findMany()
// //     //     console.log(allUsers);


// //     // await prisma.todo.createMany({
// //     //     data: [{
// //     //         user_id: '2',
// //     //         description: 'coba tambah data di prisam mysql 2'
// //     //     },
// //     //     {
// //     //         user_id: '2',
// //     //         description: 'coba tambah data di prisam mysql 3'
// //     //     },
// //     //     {
// //     //         user_id: '3',
// //     //         description: 'Tambah'
// //     //     },
// //     //     {
// //     //         user_id: '4',
// //     //         description: 'Tambah 2'
// //     //     },
// //     //     {
// //     //         user_id: '4',
// //     //         description: 'Tambah Testing'
// //     //     },
// //     //     {
// //     //         user_id: '5',
// //     //         description: 'craeate data Test'
// //     //     },
// //     // ]
// //     // });
// //     // const allUsers = await prisma.todo.findMany()
// //     // console.log(allUsers);


// //     //  await prisma.todo.update({
// //     //     where: {
// //     //       id: 1,
// //     //     },
// //     //     data: {
// //     //         description: 'Tambah Data yang pertama',
// //     //     },
// //     //   })
// //     //   const allUsers = await prisma.todo.findMany()
// //     // console.log(allUsers);

// //     //   await prisma.todo.delete({
// //     //     where: {
// //     //       id: 4,
// //     //     },
// //     //   })
// //     //  const allUsers = await prisma.todo.findMany()
// //     //  console.log(allUsers);

// //     const todoselcet = await prisma.todo.findMany({
// //         where: {
// //             user_id: '2',
// //         },
// //     })
// //     console.log(todoselcet);

// // }

// // main()
// //     .then(async () => {
// //         await prisma.$disconnect();
// //     })
// //     .catch(async (e) => {
// //         console.error(e);
// //         await prisma.$disconnect();
// //         process.exit(1);
// //     });