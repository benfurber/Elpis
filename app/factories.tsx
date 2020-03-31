import { Comment, Community, Reply, User } from "interfaces";

export const community: Community = {
  avatarPath: require("assets/images/empower_two_women_logo.png"),
  id: "1235we",
  name: "Empodere Duas Mulheres",
  posts: [],
};

export const user: User = {
  avatarPath: require("assets/images/profile-pic-annon.png"),
  id: "1235we",
  name: "May",
};

export const post = {
  author: community,
  comments: [],
  content: null,
  id: "10387-314fs-12asdbj",
  imagePath: require("assets/images/image_post_1.jpg"),
  publishedAt: new Date("2000-01-01"),
};

export const preComment: Comment = {
  author: user,
  content:
    "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
  discussionLevel: 0,
  edited: false,
  id: "21097",
  isAuthorCurrentUser: false,
  post,
  publishedAt: new Date("2019-01-01"),
  replies: [],
  totalReplies: 0,
};

export const reply: Reply = {
  author: user,
  comment: preComment,
  content: "Nao.",
  edited: false,
  id: "21097",
  isAuthorCurrentUser: false,
  link: null,
  publishedAt: new Date("2019-01-01"),
};

export const comment: Comment = {
  author: user,
  content:
    "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
  discussionLevel: 1,
  edited: false,
  id: "21097",
  isAuthorCurrentUser: false,
  post,
  publishedAt: new Date("2019-01-01"),
  replies: [reply],
  title: "Meu pai fez o que ela mandou",
  totalReplies: 1,
};

export const commentWithoutReplies: Comment = {
  author: user,
  content:
    "São pontos de vista sobre cuidado... a gente só se ofende com esse tipo de pergunta e ponto de vista porque ainda concorda que essas coisas são uma forma de se cuidar. Eu acho que fazer as unhas é umas das coisas mais fúteis, inúteis, burras de se fazer com o próprio tempo e dinheiro. Maquiagem um pouco também. E que se foda se alguém achar que eu me cuido pouco pq não faço as unhas.",
  discussionLevel: 0,
  edited: false,
  id: "21097",
  isAuthorCurrentUser: false,
  post,
  publishedAt: new Date("2019-01-01"),
  replies: [],
  title: "Meu pai fez o que ela mandou",
  totalReplies: 0,
};
