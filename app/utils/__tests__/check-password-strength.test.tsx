import { checkPasswordStrength } from "utils";

describe("checkPasswordStrength", () => {
  it("checks weak strength passwords", () => {
    const password = "rub";
    const response = checkPasswordStrength(password);

    expect(response).toEqual("weak");
  });

  it("checks medium strength passwords", () => {
    const password = "m3dium";
    const response = checkPasswordStrength(password);

    expect(response).toEqual("medium");
  });

  it("checks strong strength passwords", () => {
    const password = "sTrongP4ssword";
    const response = checkPasswordStrength(password);

    expect(response).toEqual("strong");
  });
});
