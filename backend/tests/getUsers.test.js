const request = require('supertest');
const app = require('../server');

let server;

beforeAll(async () => {
    return new Promise((resolve) => {
        server = app.listen(3002, () => {
            console.log('Server running on port 3001');
            resolve();
        });
    });
});

afterAll((done) => {
    server.close(done);
});

describe('getUsersController', () => {

    it('should return an array of objects on success', async () => {
        const response = await request(app)
            .get('/api/users')
            .expect(200);
    
        expect(response.body).toHaveProperty('users');

        expect(Array.isArray(response.body.users)).toBe(true);
    })
    
});