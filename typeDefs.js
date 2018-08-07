const { gql } = require('apollo-server');

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String
    year: Int
    rating: Int
  }

  type Developer {
    name: String
  }

  type Framework {
    id: ID!
    title: String
    git: String
    stars: Int
    developers: [Developer]
  }

  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
    frameworks: [Framework]
    framework(id: ID!): Framework
  }
`;

module.exports = typeDefs;
