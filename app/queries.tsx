import gql from "graphql-tag";

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
