import dotenv from 'dotenv'
dotenv.config()

import { ApolloServer } from 'apollo-server'
import typeDefs from './models/schema.js'
import RecipesAPI from './data-sources/recipes.js'

const recipes = [
  {
    title: 'Tjonkaplonka',
    author: {
      name: 'Johannes'
    },
  }
];

const resolvers = {
  Query: {
    recipes: () => recipes,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
  // dataSources: () => ({
  //   RecipesAPI: new RecipesAPI()
  // })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
