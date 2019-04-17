import { firstSentence } from "../first-sentence";

describe("firstSentence", () => {
  it("returns the first sentence of a string with a full stop", () => {
    const theString = "This is the first sentence. This is the second.";

    const response = firstSentence(theString);

    expect(response).toEqual("This is the first sentence.");
  });

  it("returns the first line of a multi-line string without a full stop", () => {
    const theString = "First sentence, without full stop\n This is the second.";

    const response = firstSentence(theString);

    expect(response).toEqual("First sentence, without full stop");
  });

  it("returns the whole string if it's only one sentence", () => {
    const theString = "One and only sentence";

    const response = firstSentence(theString);

    expect(response).toEqual(theString);
  });
});
