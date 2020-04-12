import gql from "graphql-tag";

const AUTHOR_ATTRIBUTES = gql`
  fragment authorAttributes on User {
    id
    avatarPath
    name
  }
`;

const CONVERSATION_ATTRIBUTES = gql`
  fragment conversationAttributes on Conversation {
    id
    remainingParticipants {
      avatarPath
      id
      name
    }
  }
`;

const POST_ATTRIBUTES = gql`
  fragment postAttributes on Post {
    id
    author {
      id
      avatarPath
      name
    }
    publishedAt
    content
    title
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
      ...authorAttributes
    }
    publishedAt
    content
    comment {
      id
    }
    edited
    imagePath
    isAuthorCurrentUser
    link
  }
  ${AUTHOR_ATTRIBUTES}
`;

export const FEED = gql`
  query Feed($first: Int, $skip: Int) {
    feed(first: $first, skip: $skip) {
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
        author {
          ...authorAttributes
        }
        content
        discussionLevel
        edited
        id
        isAuthorCurrentUser
        publishedAt
        title
        totalReplies
      }
    }
  }
  ${AUTHOR_ATTRIBUTES}
`;

export const POST_ID_FROM_COMMENT_ID = gql`
  query Comment($id: ID!) {
    comment(id: $id) {
      id
      post {
        id
      }
    }
  }
`;

export const COMMENT_WITH_REPLIES = gql`
  query Comment($id: ID!) {
    comment(id: $id) {
      author {
        id
        name
        avatarPath
      }
      content
      discussionLevel
      edited
      id
      isAuthorCurrentUser
      publishedAt
      replies {
        ...replyAttributes
      }
      title
      totalReplies
      post {
        id
      }
    }
  }
  ${REPLY_ATTRIBUTES}
`;

export const CONVERSATION_LIST = gql`
  query user {
    me {
      id
      conversations {
        ...conversationAttributes
      }
    }
  }
  ${CONVERSATION_ATTRIBUTES}
`;

export const COMMUNITY = gql`
  query community($id: ID!) {
    community(id: $id) {
      avatarPath
      id
      name
      posts {
        id
        imagePath
        title
      }
    }
  }
`;

export const LINK = gql`
  query Link($url: URL!) {
    link(url: $url) {
      id
      author
      description
      image
      title
    }
  }
`;

export const USER_AVATAR = gql`
  query user {
    me {
      id
      avatarPath
    }
  }
`;

export const USER_DETAILS = gql`
  query user {
    me {
      id
      name
      email
      avatarPath
      onboarded
      unreadNotifications
    }
  }
`;

export const MESSAGE_LIST = gql`
  query conversation($id: ID!) {
    conversation(id: $id) {
      ...conversationAttributes
      messages {
        author {
          avatarPath
          id
        }
        id
        content
        createdAt
      }
    }
  }
  ${CONVERSATION_ATTRIBUTES}
`;

export const NOTIFICATIONS = gql`
  query user {
    me {
      id
      unreadNotifications
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

export const NOTIFICATIONS_UNREAD = gql`
  query user {
    me {
      id
      unreadNotifications
    }
  }
`;

export const USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      avatarPath
      id
      name
      totalReplies
      totalTopics
    }
  }
`;
