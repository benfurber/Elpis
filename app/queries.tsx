import gql from "graphql-tag";

const POST_ATTRIBUTES = gql`
  fragment postAttributes on Post {
    id
    author {
      id
      avatarPath
    }
    createdAt
    content
    imagePath
    comments {
      id
      totalReplies
    }
  }
`;

const REPLY_ATTRIBUTES = gql`
  fragment replyAttributes on Reply {
    id
    author {
      id
      name
      avatarPath
    }
    createdAt
    content
  }
`;

export const FEED = gql`
  query {
    feed {
      ...postAttributes
    }
  }
  ${POST_ATTRIBUTES}
`;

export const POST = gql`
  query Post($id: ID!) {
    post(id: $id) {
      ...postAttributes
    }
  }
  ${POST_ATTRIBUTES}
`;

export const COMMENTS = gql`
  query Post($id: ID!) {
    post(id: $id) {
      id
      comments {
        id
        author {
          id
          name
          avatarPath
        }
        createdAt
        content
        totalReplies
      }
    }
  }
`;

export const COMMENT_WITH_REPLIES = gql`
  query Comment($id: ID!) {
    comment(id: $id) {
      id
      author {
        id
        name
        avatarPath
      }
      createdAt
      content
      replies {
        ...replyAttributes
      }
      totalReplies
    }
  }
  ${REPLY_ATTRIBUTES}
`;

export const USER_DETAILS = gql`
  query user {
    me {
      id
      name
      email
      avatarPath
      onboarded
    }
  }
`;

export const NOTIFICATIONS = gql`
  query user {
    me {
      notifications {
        id
        createdAt
        post {
          ...postAttributes
        }
        reply {
          ...replyAttributes
        }
        newNotification
        type
      }
    }
  }
  ${POST_ATTRIBUTES}
  ${REPLY_ATTRIBUTES}
`;
