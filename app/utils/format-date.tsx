const formatDate = (date: Date) => {
  const formatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  };
  return date.toLocaleString("en-GB", formatOptions);
};

export { formatDate };
