const http = require('http');

const handler = function (request, response) {
    // handle action and create result
    // send response
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('[stundenplan]');
};

const server = http.createServer();

// step 2: Web App registrieren.
// - alternative: Direkt am createServer umgeben.
// server.on("request", handler)


server.listen(3333 /*port*/, "127.0.0.1" /*hostname*/, () => {
    console.log(`Server running at`, "http:/127.0.0.1:3333");
});

// step 1:
// - Was passiert wenn ein Aufruf nach http:/127.0.0.1:3334 mache?
// - Was passiert wenn ein Aufruf nach http:/127.0.0.1:3333 mache?

// step 2:
// - Was passiert wenn ein Aufruf nach http:/127.0.0.1:3334 mache?
// - Was passiert wenn ein Aufruf nach http:/127.0.0.1:3333 mache?