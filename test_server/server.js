const express = require('express')
const app = express()
const port = 8001

app.get('/tasks', (req, res) => res.json(
    ['1', '2', "three"]));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))