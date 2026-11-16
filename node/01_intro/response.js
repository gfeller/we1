const http = require('http');

const handler = function (request, response) {
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;
    response.write('<h1 style="color:#38bdf8">Hello World!</h1>');
    response.end('<button style="background:#38bdf8;padding: 1rem; border-radius:5px">Click me</button>');
};

const server = http.createServer(handler);



server.listen(3333 /*port*/, "127.0.0.1" /*hostname*/, () => {
    console.log(`Server running at http:/127.0.0.1:3333`);
});
