import { Comment as CommentInterface } from "interfaces";

type Comments = Array<CommentInterface> | [];

const totalComments = (comments: Comments) => {
  let runningTotal = comments.length;

  comments.forEach(comment => {
    runningTotal += comment.totalReplies;
  });

  return runningTotal;
};

export { totalComments };
