// import dotenv from 'dotenv'
// dotenv.config()

import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({})

export default new ApolloClient({
  // uri: 'apollo:4000',
  uri: process.env.APOLLO_SERVER,
  cache,
})
