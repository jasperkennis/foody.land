import dotenv from 'dotenv'
dotenv.config()

import { ApolloClient, InMemoryCache } from '@apollo/client'

export default new ApolloClient({
  uri: 'apollo:4000',
  // uri: process.env.APOLLO_SERVER,
  cache: new InMemoryCache({}),
})
