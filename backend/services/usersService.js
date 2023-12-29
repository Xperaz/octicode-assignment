require('dotenv').config();

async function getData() {
    try {
        const response = await fetch(`${process.env.DATA_URL}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        return data;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getData
}