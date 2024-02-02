const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
connectToMongo();

const app = express()
const port = 5000

app.use(cors())

// To receive content in `req.body` we need to use this middleware.
app.use(express.json())

// Available Ports
app.use('/api/auth', require('./routes/auth'))
app.use('/api/profile', require('./routes/profilefeatures'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})