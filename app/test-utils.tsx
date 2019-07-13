export const mockDateNow = date => {
  const dateToday = new Date(date);
  jest.spyOn(Date, "now").mockImplementation(() => dateToday.getTime());
};
