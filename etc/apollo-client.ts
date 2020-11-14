import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({})

export default new ApolloClient({
  uri: process.env.APOLLO_HOST,
  cache,
});
