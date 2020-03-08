import { Comment, Reply } from "interfaces";

export const author = {
  avatarPath: require("assets/images/empower_two_women_logo.png"),
  id: "1235we",
  name: "Empodere Duas Mulheres",
};

export const post = {
  author,
  comments: [],
  content: null,
  id: "10387-314fs-12asdbj",
  imagePath: require("assets/images/image_post_1.jpg"),
  publishedAt: new Date("2000-01-01"),
};

export const preComment: Comment = {
  author,
  content:
    "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
  edited: false,
  id: "21097",
  isAuthorCurrentUser: false,
  publishedAt: new Date("2019-01-01"),
  replies: [],
  totalReplies: 0,
};

export const reply: Reply = {
  author,
  comment: preComment,
  content: "Nao.",
  edited: false,
  id: "21097",
  isAuthorCurrentUser: false,
  link: null,
  publishedAt: new Date("2019-01-01"),
};

export const comment: Comment = {
  author,
  content:
    "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
  edited: false,
  id: "21097",
  isAuthorCurrentUser: false,
  publishedAt: new Date("2019-01-01"),
  replies: [reply],
  title: "Meu pai fez o que ela mandou",
  totalReplies: 1,
};
