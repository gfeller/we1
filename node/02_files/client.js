const response = await fetch('http://localhost:3333/');

console.log('STATUS:', response.status);
console.log('HEADERS:', Object.fromEntries(response.headers));

const answer = await response.text();
console.log(answer);