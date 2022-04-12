const Sequelize = require('sequelize');

const db_name = process.env.MYSQL_ADDON_DB;
const db_user = process.env.MYSQL_ADDON_USER;
const db_pass = process.env.MYSQL_ADDON_PASSWORD;
const db_host = process.env.MYSQL_ADDON_HOST;

const sequelize = new Sequelize(db_name, db_user, db_pass, {
    dialect: 'mysql',
    host: db_host
});

module.exports = sequelize;