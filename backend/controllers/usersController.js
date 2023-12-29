const usersData = require('../services/usersModel');
const { CustomError, handleError } = require('../utils/errorUtils');

async function getUsers(req, res) {
    try {
        const users = await usersData.getData();

        if (!users || users.length === 0) {
            const error = new CustomError('No users found', 404);
            return handleError(res, error);
        }

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    } catch (err) {
        const error = new CustomError('Error while fetching users', 500);
        return handleError(res, error);
    }
}

module.exports = {
    getUsers
}