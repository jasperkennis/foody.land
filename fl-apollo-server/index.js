require('dotenv').config()

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./models/schema');
const RecipesAPI = require('./data-sources/recipes');

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    RecipesAPI: new RecipesAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
