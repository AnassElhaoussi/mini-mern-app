const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_CONNECTION_URL)

app.get('/', (req, res) => {
    res.send('Welcome to my Rest')
})


app.get('/getUsers', async(req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.post('/createUser', async(req, res) => {
    const userInput = req.body
    const user = new UserModel(userInput)

    try {
        await user.save()
        res.send(user)
    } catch {
        res.send('Impossible')
    }
})

app.listen(PORT, () => console.log(`App running on port ${PORT}`))