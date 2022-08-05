const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

require('dotenv').config()

const app = express()
const PORT = 5000

app.use(express.json())

mongoose.connect(process.env.MONGODB_CONNECTION)


app.get('/', (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.listen(PORT, () => console.log(`App running on port ${PORT}`))