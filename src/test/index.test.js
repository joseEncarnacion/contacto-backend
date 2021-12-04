const server = require('../Routes/contacto.route');
const request = require('supertest')

describe('Get api endpoints', () => {
    test("Should respond with a 200 status code", async () =>{
        const res = await request(server).get('/api/contacto')
        expect(res.statusCode).toEqual(200)
        
        // expect(200).tobe(200)
    })
});




// const response = request(server).get("/contacto").send();
// expect(response.statusCode).toBe(200);
