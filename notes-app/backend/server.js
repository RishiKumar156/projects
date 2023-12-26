// server.js
const http = require('http');
const { connectToMongoDB } = require('./config');

const server = http.createServer(async (req, res) => {
    switch (req.url) {
        case '/':
            res.end('You reached the home page');
            break;
        case '/notes':
            try {
                const db = await connectToMongoDB();
                const collection = db.collection('notes-app');
                const result = await collection.find().toArray();
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));
            } catch (error) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            }
            break;
        default:
            res.end('Page not found');
            break;
    }
});

const PORT = 3000;
server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running on port ${PORT}`);
});
