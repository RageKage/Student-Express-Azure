// require means basically fetch something in your dict
// to use require they have to be saved in .js
let express = require("express");

let db = require("../models");

let Student = db.Student;

let router = express.Router();

// this will find finds
router.get("/students", function (req, res, next) {
  Student.findAll().then((students) => {
    return res.json(students);
  });
});

// use this path to add a student
router.post("/students", function (req, res, next) {
  Student.create(req.body).then((data) => {
    return res.status(201).send("ok");
  });
});

// edit the table
router.patch("/students/:id", function (req, res, next) {
  // set the student id to match
  let studentID = req.params.id;
  let updatedStudent = req.body;
  Student.update(updatedStudent, { where: { id: studentID } }).then(() => {
    return res.send("ok");
  });
});

// remove a student

module.exports = router;
// dont't write code below this code
