import { withApollo } from 'next-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: process.env.APOLLO_HOST,
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
