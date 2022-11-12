// require means basically fetch something in your dict
// to use require they have to be saved in .js
let express = require('express')

let db = require('../models')

let Student = db.Student


let router = express.Router()

// this will find finds
router.get('/students', function(req, res, next){
    Student.findAll().then( students => {
        return res.json(students)
    })
})

// use this path to add a student
router.post('/students', function(req, res, next){
    Student.create(req.body).then( data => {
        return res.status(201).send('ok')
    })
})

module.exports = router