const { gql } = require('apollo-server');

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String
    year: Int
    rating: Int
  }

  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
  }
`;

module.exports = typeDefs;
