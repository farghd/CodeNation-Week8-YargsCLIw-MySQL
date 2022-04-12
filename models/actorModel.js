const Sequelize = require("sequelize");
const sequelize = require("../util/connections");

const Actor = sequelize.define("actor", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Actor;