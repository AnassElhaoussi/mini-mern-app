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


app.get('/getUsers', (req, res) => {
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