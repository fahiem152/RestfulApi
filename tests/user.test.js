const request = require('supertest')
const app = require('./server')

afterAll((done)=> {
    done()
})

describe('UserTodo', ()=>{
    test('List user', async()=>{
        const res = await request(app).get('/api/users')
        expect(res.status).toBe(200)
    }),
    test('login' ,async ()=>{
        const res = await request(app).post('/api/login').send({
            email: "ahmad@gmail.com",
            password: "12345" 
        })

        expect(res.statusCode).toBe(200)
        token = res.body.data.token
        console.log('Token: '+token)
    })
})