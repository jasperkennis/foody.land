import { HttpLink } from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import { withApollo } from 'next-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import ApolloClient from 'apollo-client'

const cache = new InMemoryCache()

const initialState = {
  promotedRecipes: [
    'Beer',
    'Bread',
    'Cake',
    'Soup',
    'Ham',
  ]
}

const stateLink = withClientState({
  cache,
  defaults: initialState,
  resolvers: {},
});

const httpLink = new HttpLink({
  uri: process.env.APOLLO_HOST,
  fetch,
  // headers: {
  //   authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  // },
});

const link = ApolloLink.from([stateLink, httpLink]);

const apolloClient = new ApolloClient({
  link,
  cache,
});

export default withApollo(apolloClient);
