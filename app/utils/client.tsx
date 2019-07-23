import ApolloClient from "apollo-boost";

import { API_PATH } from "react-native-dotenv";

const client = new ApolloClient({
  uri: API_PATH,
});

export { client };
