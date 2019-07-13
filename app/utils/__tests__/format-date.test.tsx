import { formatDate } from "../format-date";

import { mockDateNow } from "../../test-utils";

describe("formatDate", () => {
  it("presents a date from a year ago", () => {
    mockDateNow("2019-01-01");

    const date = new Date("2018-01-01");
    const response = formatDate(date);

    expect(response).toEqual("Há um ano");
  });

  it("presents a date from two months ago", () => {
    mockDateNow("2019-03-01");

    const date = new Date("2019-01-01");
    const response = formatDate(date);

    expect(response).toEqual("Há 2 meses");
  });

  it("presents a date from ten days ago", () => {
    mockDateNow("2019-01-11");

    const date = new Date("2019-01-01");
    const response = formatDate(date);

    expect(response).toEqual("Há 10 dias");
  });

  it("presents a date from seven hours ago", () => {
    mockDateNow("2019-01-01T07:00:01");

    const date = new Date("2019-01-01T00:00:01");
    const response = formatDate(date);

    expect(response).toEqual("Há 7 horas");
  });

  it("presents a date from 18 minutes ago", () => {
    mockDateNow("2019-01-01T00:18:01");

    const date = new Date("2019-01-01T00:00:01");
    const response = formatDate(date);

    expect(response).toEqual("Há 18 minutos");
  });

  it("presents a date from 28 seconds ago", () => {
    mockDateNow("2019-01-01T00:00:29");

    const date = new Date("2019-01-01T00:00:01");
    const response = formatDate(date);

    expect(response).toEqual("Há poucos segundos");
  });
});
