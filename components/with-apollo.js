import { withApollo } from 'next-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io/',
  cache: new InMemoryCache()
});

export default withApollo(apolloClient)
