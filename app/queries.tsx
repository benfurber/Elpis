import gql from "graphql-tag";

export const FEED = gql`
  query {
    feed {
      id
      author {
        id
        avatarPath
      }
      createdAt
      content
      imagePath
      comments {
        totalReplies
      }
    }
  }
`;

export const POST = gql`
  query Post($id: ID!) {
    post(id: $id) {
      id
      author {
        id
        avatarPath
      }
      createdAt
      content
      imagePath
      comments {
        totalReplies
      }
    }
  }
`;

export const COMMENTS = gql`
  query Post($id: ID!) {
    post(id: $id) {
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
        id
        author {
          id
          name
          avatarPath
        }
        createdAt
        content
      }
      totalReplies
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
    }
  }
`;
