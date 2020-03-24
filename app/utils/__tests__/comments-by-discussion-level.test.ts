import { commentsByDiscussionLevel } from "utils";

import { comment } from "factories";
import { Comment } from "interfaces";

describe("commentsByDiscussionLevel", () => {
  it("returns comments when by a single discussion level", () => {
    const expectation = [
      {
        data: [comment],
        level: 0,
      },
    ];
    const call = commentsByDiscussionLevel([comment]);
    expect(call).toEqual(expectation);
  });

  it("returns comments when by all discussion levels", () => {
    const commentLevelOne = {
      ...comment,
      discussionLevel: 1,
    };

    const commentLevelTwo = {
      ...comment,
      discussionLevel: 2,
    };

    const expectation = [
      {
        data: [commentLevelTwo],
        level: 2,
      },
      {
        data: [commentLevelOne],
        level: 1,
      },
      {
        data: [comment],
        level: 0,
      },
    ];

    const comments: Array<Comment> = [
      commentLevelOne,
      comment,
      commentLevelTwo,
    ];
    const call = commentsByDiscussionLevel(comments);

    expect(call).toEqual(expectation);
  });
});
