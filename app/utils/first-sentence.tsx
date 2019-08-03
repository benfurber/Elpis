const maxLength = 70;

const trimString = (fullString: string) => {
  if (fullString.length > maxLength) {
    let finalTrim = fullString.substr(0, maxLength);
    finalTrim = finalTrim.substr(
      0,
      Math.min(finalTrim.length, finalTrim.lastIndexOf(" ")),
    );
    return finalTrim + "...";
  }
  return fullString;
};

const firstSentence = (fullString: string) => {
  const trimedString = trimString(fullString);

  const regex = /^(.*?[.?!\n\r])\s+[A-Z0-9]/;

  if (trimedString.match(regex)) {
    let firstLine = trimedString.split(regex)[1];
    firstLine = firstLine.replace(/\n/, "");

    return firstLine;
  }

  return trimedString;
};

export { firstSentence };
