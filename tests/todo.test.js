const request = require('supertest')
const app = require('./server')

let token
describe('Todo Api testing', ()=>{
    test('Login', async ()=> {
        const res = await request(app).post('/api/login').send({
            email: "ahmad@gmail.com",
            password: "12345" 
        })

        expect(res.status).toBe(200)
        token = res.body.data.token
    })

    test('Add Todo', async ()=> {
        const res = await request(app).post('/api/todo')
        .set('Authorization', `Bearer ${token}`)
        .send({
            description: 'ini inputan dari jest testing12'
        })
        expect(res.statusCode).toBe(200)
       
    })

    test('List todo', async() => {
        const res = await request(app).get('/api/todo').set('Authorization', `Bearer ${token}`)
        expect(res.statusCode).toBe(200)
    })
})