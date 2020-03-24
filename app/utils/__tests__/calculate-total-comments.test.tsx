import { comment } from "factories";

import { calculateTotalComments } from "utils";

describe("calculateTotalComments()", () => {
  it("returns the total number of comments and replies", () => {
    const comments = [comment];
    expect(calculateTotalComments(comments)).toBe(2);
  });

  it("returns 0 if there are no comments", () => {
    expect(calculateTotalComments([])).toBe(0);
  });
});
