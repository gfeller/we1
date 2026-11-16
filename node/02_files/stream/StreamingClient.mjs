const response = await fetch('http://localhost:1337/');

console.log('STATUS:', response.status);
console.log('HEADERS:', Object.fromEntries(response.headers));

const reader = response.body.getReader();

while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    console.log('BODY:', value.byteLength);
    // stream it to the user
}