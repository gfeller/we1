const http = require('http');

const handler = function (request, response) {
    console.log(request.method, request.url);
    console.log(request.headers);
    response.end('[stundenplan]');
};

const server = http.createServer(handler);



server.listen(3333 /*port*/, "127.0.0.1" /*hostname*/, () => {
    console.log(`Server running at http:/127.0.0.1:3333`);
});
