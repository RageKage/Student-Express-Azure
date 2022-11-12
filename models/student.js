// this is the records inside the database
module.exports = (sequelize, DataTypes) => {
  let Student = sequelize.define("Student", {
    name: {
      type: DataTypes.STRING,
    },
    starID: {
      type: DataTypes.STRING,
    },
    present: {
      type: DataTypes.BOOLEAN,
    },
  })

  Student.sync( { force: false } ).then ( () => {
    console.log('synced student table')
  })

  return Student
};
