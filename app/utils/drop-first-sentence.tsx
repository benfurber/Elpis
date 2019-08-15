import { firstSentence } from "utils";

const dropEmptyStart = (remainString: string) => {
  if (remainString[0] === " ") {
    return remainString.replace(remainString[0], "");
  }

  return remainString;
};

const dropFirstSentence = (fullString: string) => {
  const startingSentence = firstSentence(fullString);

  if (fullString === startingSentence) {
    return null;
  }

  let withoutFirstSentence = fullString.replace(startingSentence, "");
  withoutFirstSentence = dropEmptyStart(withoutFirstSentence);

  return withoutFirstSentence;
};

export { dropFirstSentence };
