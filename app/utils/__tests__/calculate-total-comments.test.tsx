import { Reply } from "interfaces";
import { author } from "../../factories";

import { calculateTotalComments } from "utils";

describe("calculateTotalComments()", () => {
  it("returns the total number of comments", () => {
    const comment = {
      author,
      content:
        "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
      id: "21097",
      publishedAt: new Date("2019-01-01"),
      replies: [] as Reply[],
      totalReplies: 2,
    };

    const reply1 = {
      author,
      comment,
      content:
        "Meu pai também fez o mesmo. Logo depois que minha mãe pediu o divórcio porque sofria violência dentro de casa, ele pegou as malas, se mudou e sumiu no mundo. Nem faço mais questão de saber pra onde ele foi.",
      id: "21098",
      publishedAt: new Date("2019-01-02"),
    };

    const reply2 = {
      author,
      comment,
      content: "Nem faço mais questão de saber pra onde ele foi.",
      id: "21099",
      publishedAt: new Date("2019-01-03"),
    };

    comment.replies.push(reply1 as Reply);
    comment.replies.push(reply2 as Reply);

    const comments = [comment];

    expect(calculateTotalComments(comments)).toBe(3);
  });

  it("returns 0 if there are no comments", () => {
    expect(calculateTotalComments([])).toBe(0);
  });
});
