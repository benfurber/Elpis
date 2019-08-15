import AsyncStorage from "@react-native-community/async-storage";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
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
