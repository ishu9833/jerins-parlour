const express = require('express')
require('dotenv').config();
const cors = require('cors')
require('./db/connection')

const app = express()
const port = process.env.PORT
const userRoutes = require('./routes/user')


app.use(cors())
app.use(express.json())
app.use('/user', userRoutes)



app.listen(port, () => {
    console.log(`the server running on port ${port}`)
})