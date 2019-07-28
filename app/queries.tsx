import gql from "graphql-tag";

export const feed = gql`
  query {
    feed {
      id
      author {
        id
      }
      title
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
