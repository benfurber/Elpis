export const author = {
  id: "1235we",
  avatarPath: require("assets/images/empower_two_women_logo.png"),
  name: "Empodere Duas Mulheres",
};

export const post = {
  author,
  comments: [],
  createdAt: new Date("2000-01-01"),
  content: null,
  id: "10387-314fs-12asdbj",
  imagePath: require("assets/images/image_post_1.jpg"),
};

export const reply = {
  author,
  content: "Nao.",
  createdAt: new Date("2019-01-01"),
  id: "21097",
};

export const comment = {
  author,
  content:
    "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
  createdAt: new Date("2019-01-01"),
  id: "21097",
  totalReplies: 1,
  replies: [reply],
};
