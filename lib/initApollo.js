// const { ApolloServer } = require('apollo-server');
// const typeDefs = require('../models/schema');
// const RecipesAPI = require('../data-sources/recipes');
import RecipesAPI from '../data-sources/recipes'
import typeDefs from '../models/schema'
import { ApolloServer } from 'apollo-server'

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    RecipesAPI: new RecipesAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
