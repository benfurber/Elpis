import { formatDate } from "../format-date";

describe("formatDate", () => {
  it("presents a date from a year ago", () => {
    const dateToday = new Date("2019-01-01");
    jest.spyOn(Date, "now").mockImplementation(() => dateToday.getTime());

    const date = new Date("2018-01-01");
    const response = formatDate(date);

    expect(response).toEqual("Há um ano");
  });

  it("presents a date from two months ago", () => {
    const dateToday = new Date("2019-03-01");
    jest.spyOn(Date, "now").mockImplementation(() => dateToday.getTime());

    const date = new Date("2019-01-01");
    const response = formatDate(date);

    expect(response).toEqual("Há 2 meses");
  });

  it("presents a date from ten days ago", () => {
    const dateToday = new Date("2019-01-11");
    jest.spyOn(Date, "now").mockImplementation(() => dateToday.getTime());

    const date = new Date("2019-01-01");
    const response = formatDate(date);

    expect(response).toEqual("Há 10 dias");
  });

  it("presents a date from seven hours ago", () => {
    const dateToday = new Date("2019-01-01T07:00:01");
    jest.spyOn(Date, "now").mockImplementation(() => dateToday.getTime());

    const date = new Date("2019-01-01T00:00:01");
    const response = formatDate(date);

    expect(response).toEqual("Há 7 horas");
  });

  it("presents a date from 18 minutes ago", () => {
    const dateToday = new Date("2019-01-01T00:18:01");
    jest.spyOn(Date, "now").mockImplementation(() => dateToday.getTime());

    const date = new Date("2019-01-01T00:00:01");
    const response = formatDate(date);

    expect(response).toEqual("Há 18 minutos");
  });

  it("presents a date from 28 seconds ago", () => {
    const dateToday = new Date("2019-01-01T00:00:29");
    jest.spyOn(Date, "now").mockImplementation(() => dateToday.getTime());

    const date = new Date("2019-01-01T00:00:01");
    const response = formatDate(date);

    expect(response).toEqual("Há poucos segundos");
  });
});
