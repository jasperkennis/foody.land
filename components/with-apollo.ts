import { HttpLink } from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import { withApollo } from 'next-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory'

import ApolloClient from 'apollo-client'



const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.APOLLO_HOST,
    fetch,
  }),
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
