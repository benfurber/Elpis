import { POST_ID_FROM_COMMENT_ID } from "queries";
import { client } from "utils";

async function getPostId(commentId) {
  const result = await client.query({
    query: POST_ID_FROM_COMMENT_ID,
    variables: { id: commentId },
  });

  if (!result.data) return null;

  const postId = result.data.comment.post.id;
  return postId;
}

export { getPostId };
