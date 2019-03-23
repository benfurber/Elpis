const firstSentence = (fullString: string) => {
  const regex = /^(.*?[.?!\n\r])\s+[A-Z0-9]/;

  if (fullString.match(regex)) {
    let firstLine = fullString.split(regex)[1];
    firstLine = firstLine.replace(/\n/, "");

    return firstLine;
  }

  return fullString;
};

export { firstSentence };
