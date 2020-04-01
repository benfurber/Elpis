import { COMMENTS } from "queries";
import { calculateTotalComments, client, getPostId } from "utils";

async function getTotalComments(commentId) {
  const postId = await getPostId(commentId);

  const getComments = await client.query({
    query: COMMENTS,
    variables: {
      id: postId,
    },
  });

  if (!getComments.data) return null;

  const comments = getComments.data.post.comments;
  return calculateTotalComments(comments);
}

export { getTotalComments };
