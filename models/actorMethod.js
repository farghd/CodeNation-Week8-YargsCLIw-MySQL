const Actor = require( "./actorModel" );
const Movie = require("./movieModel");

exports.addActor = async (actor) => {
    try {
      const actorToBeAdded = await Actor.create(actor);
      return actorToBeAdded;
    } catch (error) {
        console.log(error);
    }
};