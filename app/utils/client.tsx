import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import fetch from "node-fetch";

import { API_PATH } from "react-native-dotenv";

const error = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const htmlLink = new HttpLink({
  uri: API_PATH,
  fetch: fetch,
});

const link = ApolloLink.from([error, htmlLink]);
const cache = new InMemoryCache();

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export { client };
