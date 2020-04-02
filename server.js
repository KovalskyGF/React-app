/*********Setting server*******/ 
const hostname = 'localhost';
const port = 4000;
/*****************************/ 
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


let table = {
  "items": [
    { "id": 1, "name": "Apples",  "price": "$2" },
    { "id": 2, "name": "Peaches", "price": "$5" }
  ] 
}

let data = JSON.stringify(table);



app.post('/publish', (req, res) => {
  res.send(req.body);
  res.sendStatus(200);
});






const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(data);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});