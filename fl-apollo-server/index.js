import dotenv from 'dotenv'
dotenv.config()

import { ApolloServer } from 'apollo-server'
import schema from './dynamic-schema.js'

const server = new ApolloServer({
  schema,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
