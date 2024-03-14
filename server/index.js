const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const { musixvar } = require('./schema.js')

const app = express()
app.use(bodyParser.json())
app.use(cors())

async function connectToDb() {
    try {
        await mongoose.connect('mongodb+srv://aishwaryar17:aishu617@cluster0.qzfnamu.mongodb.net/MeloDB?retryWrites=true&w=majority&appName=Cluster0')
        console.log('DB connection established ;)')
        const port = process.env.PORT || 8000
        app.listen(port, function() {
            console.log(`Listening on port ${port}...`)
        })
    } catch(error) {
        console.log(error)
        console.log('Cloudn\'t establish connection :(')
    }
}
connectToDb()
app.post('/add-user', async function(request, response) {
    try {
        await musixvar.create({
            "username" : request.body.username,
            "password" : request.body.password,

        })
        response.status(201).json({
            "status" : "success",
            "message" : "entry created"
        })
    } catch(error) {
        response.status(500).json({
            "status" : "failure",
            "message" : "entry not created",
            "error" : error
        })
    }
})

// app.get('/get-expenses', async function(request, response) {
//     try {
//         const expenseDetails = await Expense.find()
//         response.status(200).json(expenseDetails)
//     } catch(error) {
//         response.status(500).json({
//             "status" : "failure",
//             "message" : "could not fetch data",
//             "error" : error
//         })
//     }
// })