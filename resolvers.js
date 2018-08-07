const movies = require('./movies');

const resolvers = {
  Query: {
    movies: () => movies
  }
};

module.exports = resolvers;
