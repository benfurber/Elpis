import gql from "graphql-tag";

export const ADD_COMMENT = gql`
  mutation createComment($content: String!, $id: ID!) {
    createComment(content: $content, id: $id) {
      id
    }
  }
`;

export const ADD_REPLY = gql`
  mutation createReply($content: String!, $id: ID!) {
    createReply(content: $content, id: $id) {
      id
    }
  }
`;

export const ADD_USER_PROFILE_PICTURE = gql`
  mutation linkUserProfilePicture($avatarPath: URL!) {
    linkUserProfilePicture(avatarPath: $avatarPath) {
      avatarPath
    }
  }
`;

export const COMPLETE_USER_ONBOARDING = gql`
  mutation completeUserOnboarding {
    completeUserOnboarding {
      id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const UPDATE_USER_PASSWORD = gql`
  mutation updatePassword($password: String!) {
    updatePassword(password: $password) {
      id
    }
  }
`;
