import { author } from "../../factories";

import { calculateTotalComments } from "utils";

describe("calculateTotalComments()", () => {
  it("returns the total number of comments", () => {
    const reply1 = {
      author,
      content:
        "Meu pai também fez o mesmo. Logo depois que minha mãe pediu o divórcio porque sofria violência dentro de casa, ele pegou as malas, se mudou e sumiu no mundo. Nem faço mais questão de saber pra onde ele foi.",
      createdAt: new Date("2019-01-02"),
      id: "21098",
    };

    const reply2 = {
      author,
      content: "Nem faço mais questão de saber pra onde ele foi.",
      createdAt: new Date("2019-01-03"),
      id: "21099",
    };

    const comment = {
      author,
      content:
        "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
      createdAt: new Date("2019-01-01"),
      id: "21097",
      replies: [reply1, reply2],
      totalReplies: 2,
    };

    const comments = [comment];

    expect(calculateTotalComments(comments)).toBe(3);
  });

  it("returns 0 if there are no comments", () => {
    expect(calculateTotalComments([])).toBe(0);
  });
});
