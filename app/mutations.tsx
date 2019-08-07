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

export const addUserProfilePicture = gql`
  mutation linkUserProfilePicture($avatarPath: URL!) {
    linkUserProfilePicture(avatarPath: $avatarPath) {
      avatarPath
    }
  }
`;

export const completeUserOnboarding = gql`
  mutation completeUserOnboarding {
    completeUserOnboarding {
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

export const updateUserPassword = gql`
  mutation updatePassword($password: String!) {
    updatePassword(password: $password) {
      id
    }
  }
`;
