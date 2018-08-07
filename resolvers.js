const movies = require('./movies');
const frameworks = require('./frameworks');

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (parent, params) => movies
      .find(movie => movie.id == params.id), // eslint-disable-line eqeqeq
    frameworks: () => frameworks,
    framework: (_, { id }) => frameworks
      .find(framework => framework.id == id) // eslint-disable-line eqeqeq
  },
  Movie: {
    rating: () => 0
  },
  Framework: {
    developers: ({ title }) => {
      if (title === 'React') {
        return [{ name: 'Dan Abramov' }];
      }
      return [{ name: 'Evan Yu' }];
    }
  }
};

module.exports = resolvers;
