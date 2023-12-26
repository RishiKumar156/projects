const http = require('http');

const server = http.createServer((req, res) => {
    const mongodbURL = 'mongodb+srv://rishik:sagpenty@cluster0.opou9wy.mongodb.net/?retryWrites=true&w=majority';
    switch (req.url) {
        case '/':
            res.end('You reached the home page');
            break;
        case '/notes':
            res.end('You reached the notes page');
            break;
        case '/createNotes':
            res.end('You reached the create notes page');
            break;
        default:
            res.end('Page not found');
            break;
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running on port 3000');
});
