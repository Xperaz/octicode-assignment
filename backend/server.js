const http = require('http');
const usersController = require('./controllers/getUsersController');
const findUserController = require('./controllers/findUserController');

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.url === '/api/users' && req.method === 'GET'){
        usersController.getUsers(req, res);
    }
    else if (req.url.startsWith('/api/search') && req.method === 'GET') {
       findUserController.findUser(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify({ message: 'Route Not Found' }));
    }
});

module.exports = server; 