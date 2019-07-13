import { formatDate } from "../format-date";

describe("formatDate", () => {
  it("formats a date", () => {
    const dateToday = new Date("2019-01-01");
    jest.spyOn(Date, "now").mockImplementation(() => dateToday.getTime());

    const date = new Date("2018-01-01");
    const response = formatDate(date);

    expect(response).toEqual("Há um ano");
  });
});
