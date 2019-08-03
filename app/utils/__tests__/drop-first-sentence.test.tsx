import { dropFirstSentence } from "utils";

describe("dropFirstSentence", () => {
  it("returns everything after the first sentence", () => {
    const multiSentenceString = "One sentence. Second sentence.";

    const response = dropFirstSentence(multiSentenceString);

    expect(response).toEqual("Second sentence.");
  });
});
