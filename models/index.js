let { Sequelize, DataTypes } = require("sequelize");

let env = process.env.NODE_ENV || "development";

console.log("using env " + env);

// let configFile = require(__dirname, + '/../config.json')[env]

let configFile = require(__dirname + "/../config.json");

let config = configFile[env];

let password = process.env.DB_PASSWORD;

config.password = password;

// this is the database
let db = {};

let sequelize = new Sequelize(config);

let StudentModelCreate = require("./student");
let studentModel = StudentModelCreate(sequelize, DataTypes);

db[studentModel.name] = studentModel;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
