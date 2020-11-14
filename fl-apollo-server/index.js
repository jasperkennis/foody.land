import dotenv from 'dotenv'
dotenv.config()

import { ApolloServer } from 'apollo-server'
import typeDefs from './models/schema.js'
import RecipesAPI from './data-sources/recipes.js'

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    RecipesAPI: new RecipesAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
