require("dotenv").config();
const sequelize = require("./util/connections");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const Movie = require("./models/movieModel");
const Actor = require("./models/actorModel");
const {
  createMovie,
  findMovie,
  updateMovie,
  deleteMovie,
} = require("./models/movieMethod");
const {addActor} = require('./models/actorMethod.js');

const app = async () => {
  await Actor.sync();
  await Movie.sync();
  Actor.hasMany(Movie, { foreignKey: "actorId" });
  Movie.belongsTo(Actor, {
    foreignKey: "actorId",
  });

  if (process.argv[2] == "create") {
    await createMovie({ title: yargs.argv.title, actorId: yargs.argv.actorId });
    console.log("Movie successfully added to database");
  } else if (process.argv[2] == "read") {
    const movies = await findMovie();
    console.log(movies);
  } else if (process.argv[2] == "update") {
    const searchForMovie = { title: yargs.argv.title };
    const replaceMovie = { actorId: yargs.argv.actorId };
    await updateMovie(searchForMovie, replaceMovie);
  } else if (process.argv[2] == "delete") {
    const findMovie = { title: yargs.argv.title };
    await deleteMovie(findMovie);
  } else if (process.argv[2] == "actor") {
    const actor = { name: yargs.argv.actor_name };
    let addedActor = await addActor(actor);
    console.log(addedActor);
  } else {
    console.log("Incorrect command");
  }
};
app();
