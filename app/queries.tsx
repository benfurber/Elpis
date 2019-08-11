import gql from "graphql-tag";

export const feed = gql`
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
        id
        content
        createdAt
        replies {
          id
          content
          createdAt
        }
        totalReplies
      }
    }
  }
`;

export const comments = gql`
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

export const commentWithReplies = gql`
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

export const userDetails = gql`
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
