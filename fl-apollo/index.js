// import dotenv from 'dotenv'
// dotenv.config()

import { ApolloServer } from 'apollo-server'
import schema from './dynamic-schema.js'
import './mongooseConnection.js'

const server = new ApolloServer({
  schema,
  introspection: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
