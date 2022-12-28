require("dotenv").config();
const Sequelize = require('sequelize');
const operatorsAliases = {
    $like: Sequelize.Op.like,
};
const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        operatorsAliases,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.architecture = require("../models/Architecture")(sequelize, Sequelize);
db.mep = require("../models/MEP")(sequelize, Sequelize);
db.structure = require("../models/Structure")(sequelize, Sequelize);

module.exports = db;