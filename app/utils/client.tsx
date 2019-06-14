import ApolloClient from "apollo-boost";

import { Config } from "utils";

const uri = Config.API_PATH;

const client = new ApolloClient({
  uri,
});

export { client };
