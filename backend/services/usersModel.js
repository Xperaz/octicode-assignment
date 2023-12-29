

async function getData() {
    try {
        const response = await fetch('https://dummyjson.com/users', {
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