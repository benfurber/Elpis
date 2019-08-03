import { dropFirstSentence } from "utils";

describe("dropFirstSentence", () => {
  it("returns everything after the first sentence", () => {
    const multiSentenceString = "One sentence. Second sentence.";

    const response = dropFirstSentence(multiSentenceString);

    expect(response).toEqual("Second sentence.");
  });

  it("returns null if there's only a single short sentence", () => {
    const multiSentenceString = "One sentence.";

    const response = dropFirstSentence(multiSentenceString);

    expect(response).toEqual(null);
  });
});
