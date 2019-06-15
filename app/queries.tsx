import { gql } from "apollo-boost";

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
