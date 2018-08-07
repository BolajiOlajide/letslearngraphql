const { ApolloServer } = require('apollo-server');
const logger = require('winston');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen()
  .then(serverInstance => logger.info(serverInstance.url));
