class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}


function handleError(res, error) {
    res.writeHead(error.statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: error.message }));
}

module.exports = {
    CustomError,
    handleError,
};