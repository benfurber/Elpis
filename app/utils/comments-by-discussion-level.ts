import { Comment } from "interfaces";

type ByDiscussionLevel = Array<DiscussionLevelStructure>;

interface DiscussionLevelStructure {
  level: number;
  data: Array<Comment>;
}

function commentsByDiscussionLevel(comments: Comment[]): ByDiscussionLevel {
  const byDiscussionLevel: ByDiscussionLevel = [];
  [0, 1, 2].map(level => byDiscussionLevel.push({ data: [], level }));

  comments.map(comment =>
    byDiscussionLevel[comment.discussionLevel].data.push(comment),
  );

  const filtered = byDiscussionLevel.filter(({ data }) => data.length !== 0);
  return filtered.reverse();
}

export { commentsByDiscussionLevel };
