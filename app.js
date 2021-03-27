const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello Breno Marino de Souza Ferreira de RM: 339008')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
