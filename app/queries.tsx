import gql from "graphql-tag";

const AUTHOR_ATTRIBUTES = gql`
  fragment authorAttributes on User {
    id
    avatarPath
    name
  }
`;

const POST_ATTRIBUTES = gql`
  fragment postAttributes on Post {
    id
    author {
      ...authorAttributes
    }
    createdAt
    content
    imagePath
    comments {
      id
      totalReplies
    }
  }
  ${AUTHOR_ATTRIBUTES}
`;

const REPLY_ATTRIBUTES = gql`
  fragment replyAttributes on Reply {
    id
    author {
      ...authorAttributes
    }
    createdAt
    content
    comment {
      id
    }
  }
  ${AUTHOR_ATTRIBUTES}
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
      id
      notifications {
        id
        createdAt
        content {
          post {
            ...postAttributes
          }
          reply {
            ...replyAttributes
          }
          type
        }
        newNotification
      }
    }
  }
  ${POST_ATTRIBUTES}
  ${REPLY_ATTRIBUTES}
`;
