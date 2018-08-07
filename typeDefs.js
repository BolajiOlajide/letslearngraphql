const { gql } = require('apollo-server');

const typeDefs = gql`
  type Movie {
    id: ID!,
    title: String,
    year: Int
  }

  type Query {
    movies: [Movie]
  }
`;

module.exports = typeDefs;
