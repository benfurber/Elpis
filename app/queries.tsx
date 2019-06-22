import { gql } from "graphql";

export const allPosts = gql`
  {
    findAllPosts {
      body
      id
      imagePath
      title
      author {
        id
        name
      }
    }
  }
`;
