const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;





let table = {
  "items": [
    { "id": 1, "name": "Apples",  "price": "$2" },
    { "id": 2, "name": "Peaches", "price": "$5" }
  ] 
}

let data = JSON.stringify(table);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(data);
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});