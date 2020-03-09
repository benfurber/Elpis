import AsyncStorage from "@react-native-community/async-storage";
import { API_PATH } from "react-native-dotenv";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

import { bugTracker } from "utils";

const error = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(error => {
      bugTracker.notify(error);

      const { message, locations, path } = error;
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  if (networkError) {
    bugTracker.notify(networkError);
    console.error(`[Network error]: ${networkError}`);
  }
});

const htmlLink = new HttpLink({
  fetch: fetch,
  uri: API_PATH,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const link = authLink.concat(ApolloLink.from([error, htmlLink]));
const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link,
});

export { client };
