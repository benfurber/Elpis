import { Comment as CommentInterface } from "interfaces";

type Comments = CommentInterface[] | [];

const calculateTotalComments = (comments: Comments) => {
  let runningTotal = comments.length;

  comments.forEach(comment => {
    runningTotal += comment.totalReplies;
  });

  return runningTotal;
};

export { calculateTotalComments };
