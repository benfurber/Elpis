import gql from "graphql-tag";

export const addComment = gql`
  mutation createComment($content: String!, $id: ID!) {
    createComment(content: $content, id: $id) {
      id
    }
  }
`;

export const addReply = gql`
  mutation createReply($content: String!, $id: ID!) {
    createReply(content: $content, id: $id) {
      id
    }
  }
`;

export const loginUser = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
