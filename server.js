const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 4001

app.use(cors({ origin: '*' }))
app.use(bodyParser())

app.get('/', (req, res) => {
  console.log("work");
  
  res.send({text: "Hello world"})
})

app.post('/', (req, res) => {  
  res.send({text: "post"})
  console.log(req.body)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
