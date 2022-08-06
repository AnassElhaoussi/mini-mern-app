const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

require('dotenv').config()

const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://AnassX7:ansx142@cluster0.dgctzrl.mongodb.net/mern-db?retryWrites=true&w=major")


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