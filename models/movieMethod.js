const Movie = require("./movieModel");

// const createMovie = (async (title) => {
//     await Movie.sync({ 
//         force: true,
//         title,    
//     });
// })();

exports.createMovie = async (movie) => {
    try {
      await Movie.create(movie);
    } catch (error) {
      console.log(error);
    }
  };

exports.findMovie = async() => {
    try{
        const find = await Movie.findAll({
            raw:true,
            attribut: ['id', 'title', 'actor'],
        });
        return find;
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async(searchForMovie, replaceMovie) => {
    try{
        const updatedMovie = await Movie.update(replaceMovie, {where: searchForMovie});
        return updatedMovie;
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async(searchForMovie) => {
    try{
        const toBeDeleted = await Movie.destroy({where: searchForMovie});
        return toBeDeleted;
    } catch (error) {
        console.log(error);
    }
};

  