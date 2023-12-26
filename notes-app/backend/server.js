const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    const paths = req.url;
    res.end('Server started')
})


server.listen(3000, '127.0.0.1' ,() => {
    console.log('Server running on port 3000')
})