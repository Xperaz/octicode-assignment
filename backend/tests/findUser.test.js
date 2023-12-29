const request = require('supertest');
const app = require('../server');

let server;

beforeAll(async () => {
    return new Promise((resolve) => {
        server = app.listen(3001, () => {
            console.log('Server running on port 3001');
            resolve();
        });
    });
});

afterAll((done) => {
    server.close(done);
});

describe('findUserController', () => {

    it('should return an array of objects on success', async () => {
        const response = await request(app)
            .get('/api/search?key=Terry')
            .expect(200);
    
       // expect(response.body).toHaveProperty('users');

        expect(Array.isArray(response.body)).toBe(true);
    })

    it('should handle an invalid search request', async () => {
        const response = await request(app)
            .get('/api/search')
            .expect(400);

        expect(response.body).toEqual({
            "error": "Invalid search request. Missing or invalid key parameter."
        });
    });

    it('should handle a user not found scenario', async () => {
        const response = await request(app)
            .get('/api/search?key=nonusers')
            .expect(404);

        expect(response.body).toEqual({
            "error": "User not found"
        });
    });

    
});