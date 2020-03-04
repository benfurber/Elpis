import gql from "graphql-tag";

export const ADD_COMMENT = gql`
  mutation createComment($content: String!, $id: ID!, $title: String) {
    createComment(content: $content, id: $id, title: $title) {
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

export const UPDATE_USER_PASSWORD = gql`
  mutation updatePassword($password: String!) {
    updatePassword(password: $password) {
      id
    }
  }
`;
