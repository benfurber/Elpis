import { formatDate } from "../format-date";

describe("formatDate", () => {
  it("formats a date", () => {
    const date = new Date("2019-01-01");
    const response = formatDate(date);

    expect(response).toEqual("01/01/2019");
  });
});
