// require means basically fetch something in your dict
// to use require they have to be saved in .js
let express = require("express");

let db = require("../models");

let Student = db.Student;

let router = express.Router();

// this will find finds
router.get("/students", function (req, res, next) {
  Student.findAll({ order: ["present", "name", db.Sequelize.fn('Lower', db.Sequelize.col('name'))] })
    .then((students) => {
      return res.json(students);
    })
    .catch((err) => next(err));
});

// use this path to add a student
router.post("/students", function (req, res, next) {
  Student.create(req.body)
    .then((data) => {
      return res.status(201).send("ok");
    })
    .catch((err) => {
      // handle user error
      if (err instanceof db.Sequelize.ValidationError) {
        let messages = err.errors.map((e) => e.message);
        return res.status(400).json(messages);
      }
      // pass the request to our server error
      return next(err);
    });
});

// edit the table
router.patch("/students/:id", function (req, res, next) {
  // set the student id to match
  let studentID = req.params.id;
  let updatedStudent = req.body;
  Student.update(updatedStudent, { where: { id: studentID } })
    .then((rowModified) => {
      let numberOfRowsModified = rowModified[0]; // number of rows

      if (numberOfRowsModified == 1) { // row changed
        return res.send("ok");
      } else {
        // no row - return the error code 404
        return res.status(404).json(["Student with that ID is not found"]);
      }
    })
    .catch((err) => {
      // 
      if (err instanceof db.Sequelize.ValidationError) {
        let messages = err.errors.map((e) => e.message);
        return res.status(400).json(messages);
      }
      // pass the request to our server error
      return next(err);
    });
});

// remove a student

router.delete("/students/:id", function (req, res, next) {
  let studentID = req.params.id;
  Student.destroy({ where: { id: studentID } })
    .then((rowsDeleted) => {
      if (rowsDeleted == 1) {
        return res.send("ok");
      } else {
        return res.status(404).json(["Student Not Found"]);
      }
    })
    .catch((err) => next(err));
});

module.exports = router;
// dont't write code below this code
