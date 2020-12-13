// import dotenv from 'dotenv'
// dotenv.config()

import { ApolloClient, InMemoryCache } from '@apollo/client'
const client = new ApolloClient({
  uri: 'http://0.0.0.0:4000',
  // uri: process.env.APOLLO_SERVER,
  cache: new InMemoryCache({}),
})

export default client
