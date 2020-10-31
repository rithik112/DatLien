const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const mongoose = require('mongoose')
const db = "mongodb+srv://Auth1:Auth1@cluster0.4a0ry.mongodb.net/Auth1?retryWrites=true&w=majority"
const bcrypt = require('bcrypt');

mongoose.connect(db, {useNewUrlParser: true , useUnifiedTopology: true}, err => {
    if (err) {
        console.error("Error While Connecting To Database...!\n" + err)
    } else {
        console.log('Connected Successfully to MongoDB...!')
    }
})

router.get('/',  (req, res) => {
    res.send("Hey It's me Api...!")
})

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, '112SecretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

router.get('/listings', (req,res) => {
    let listings = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(listings)
  })
  
  router.get('/royal', verifyToken, (req, res) => {
    let royalListings = [
      {
        "_id": "1",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(royalListings)
  })

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User({
      username : userData.username,
      email : userData.email,
      password : bcrypt.hashSync(userData.password, 10)
    })
    user.save((error, registeredUser) => {
        if (error) {
            console.log("Error While Registering User To Database...!\n" + error)
        } else {
            let payload = { subject: registeredUser._id}
            let token =  jwt.sign(payload, '112SecretKey')
            res.status(200).send({token})
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log( error)
        } else {
           if (!user) {
              res.status(401).send("Invalid Email...!")
           } else if (bcrypt.compareSync(userData.password, user.password)){
              let payload = { subject: user._id}
              let token =  jwt.sign(payload, '112SecretKey') 
              res.status(200).send({token})  
           } else {
              res.status(401).send("Invalid Password...!")
           }
        }
    })
})

module.exports = router