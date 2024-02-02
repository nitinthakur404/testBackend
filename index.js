const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.get('/api/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/twitter', (req, res) => {
    res.json({
        "name": "Nitin kumar",
        "branch": "Computer Science"
    })
})
app.get('/api/login', (req, res) => {
    res.send('<h1> please login at chai our code')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})