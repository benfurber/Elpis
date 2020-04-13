import gql from "graphql-tag";

export const ADD_COMMENT = gql`
  mutation createComment($content: String!, $id: ID!, $title: String) {
    createComment(content: $content, id: $id, title: $title) {
      id
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation createMessage($conversationId: ID!, $content: String!) {
    createMessage(conversationId: $conversationId, content: $content) {
      id
    }
  }
`;

export const ADD_REPLY = gql`
  mutation createReply($id: ID!, $imagePath: URL, $content: String!) {
    createReply(id: $id, imagePath: $imagePath, content: $content) {
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

export const AGE_NOTIFICATION = gql`
  mutation ageNotification($id: String!) {
    ageNotification(id: $id) {
      id
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

export const DELETE_COMMENT = gql`
  mutation deleteComment($id: ID!) {
    deleteComment(id: $id) {
      id
    }
  }
`;

export const DELETE_REPLY = gql`
  mutation deleteReply($id: ID!) {
    deleteReply(id: $id) {
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

export const REQUEST_PASSWORD_RESET = gql`
  mutation RequestPasswordReset($email: String!) {
    requestPasswordReset(email: $email) {
      id
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation ResetPassword(
    $id: ID!
    $password: String!
    $passwordRequest: String!
  ) {
    resetPassword(
      id: $id
      password: $password
      passwordRequest: $passwordRequest
    ) {
      token
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($content: String, $id: ID!, $title: String) {
    updateComment(content: $content, id: $id, title: $title) {
      id
    }
  }
`;

export const UPDATE_REPLY = gql`
  mutation updateReply($content: String, $id: ID!, $imagePath: URL) {
    updateReply(content: $content, id: $id, imagePath: $imagePath) {
      id
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
