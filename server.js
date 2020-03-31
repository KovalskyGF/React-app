var express = require('express');
var app = express();

let table = {
  "items": [
    { "id": 1, "name": "Apples",  "price": "$2" },
    { "id": 2, "name": "Peaches", "price": "$5" }
  ] 
}
      
let json = JSON.stringify(table);      

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/table', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(table);
})

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

