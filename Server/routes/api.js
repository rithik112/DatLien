const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = "mongodb+srv://Auth1:Auth1@cluster0.4a0ry.mongodb.net/Auth1?retryWrites=true&w=majority"

mongoose.connect(db, err => {
    if (err) {
        console.error("Error While Connecting To Database...!\n" + err)
    } else {
        console.log('Connected Successfully to MongoDB...!')
    }
})


router.get('/',  (req, res) => {
    res.send("Hey It's me Api...!")
})

module.exports = router