/* istanbul ignore file */
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://tsil6utanbfdjpvyrgwikjhkne.appsync-api.us-east-2.amazonaws.com/graphql',
  headers: {
    "x-api-key":"da2-ffyhq623szeavnvhk524nryhbi"
  },
  cache: new InMemoryCache()
});

export default client