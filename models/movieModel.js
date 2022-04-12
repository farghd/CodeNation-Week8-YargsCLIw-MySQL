const Sequelize = require("sequelize");
const sequelize = require("../util/connections");
const Actor = require("./actorModel");

const Movie = sequelize.define("movie", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  actorId: {
    type: Sequelize.INTEGER,
    references: { model: Actor, key: "id" },
  },
});

module.exports = Movie;
