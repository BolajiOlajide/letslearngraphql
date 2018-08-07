const movies = require('./movies');

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (parent, params) => movies
      .find(movie => movie.id == params.id), // eslint-disable-line eqeqeq
  },
  Movie: {
    rating: () => 0
  }
};

module.exports = resolvers;
