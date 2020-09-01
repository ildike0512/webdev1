const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("Hello Word!");
});

server.listen(8080);
