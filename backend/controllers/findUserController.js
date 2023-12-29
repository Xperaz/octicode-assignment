const Data = require('../services/usersModel');
const { CustomError, handleError } = require('../utils/errorUtils');

async function findUser(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
        const searchKey = url.searchParams.get('key') || '';

        if (!searchKey) {
            const error = new CustomError('Invalid search request. Missing or invalid key parameter.', 400);
            return handleError(res, error);
        }

        try {
            const data = await Data.getData();
            const regex = new RegExp(searchKey, 'i');
            const results = data.users.filter(user =>
                regex.test(user.firstName) ||
                regex.test(user.lastName) ||
                regex.test(user.maidenName) ||
                regex.test(user.username)
            );

            if (results.length === 0) {
                const error = new CustomError('User not found', 404);
                return handleError(res, error);
            }

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(results));
        } catch (err) {
            const error = new CustomError('Error while processing the request', 500);
        return handleError(res, error);
        }
}


module.exports = {
    findUser
}