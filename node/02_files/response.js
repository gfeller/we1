const http = require('http');
const fs = require('fs/promises');

const handler = async function (request, response) {
    const result = await fs.readFile("./response.js", "utf8")

    response.setHeader("Content-Type", "text/plain");
    response.statusCode = 200;
    response.end(result);
};

const server = http.createServer(handler);


server.listen(3333 /*port*/, "127.0.0.1" /*hostname*/, () => {
    console.log(`Server running at http:/127.0.0.1:3333`);
});
