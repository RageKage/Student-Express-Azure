let express = require('express')

let db = require('../models')

let Student = db.Student


let router = express.Router()

router.get('/student', function(req, res, next){
    Student.findAll().then( students => {
        return res.json(students)
    })
})

router.post('/student', function(req, res, next){
    Student.create(req.body).then( data => {
        return res.status(201).send('OK')
    })
})

module.exports = router