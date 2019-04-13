import { NavigationScreenProp } from "react-navigation";

export interface Author {
  avatarPath: NodeRequire;
  name: string;
}

export interface Comment {
  author: Author;
  body: string;
  dateCreated: Date;
  id: string;
  replies: Array<Reply> | [];
  title: string;
  totalReplies: number;
}

export type NavigationType = NavigationScreenProp<any, any>;

export interface Post {
  author: Author;
  comments: Array<Comment> | [];
  date: Date;
  description: string | null;
  id: string;
  imagePath: NodeRequire;
}

export interface Reply {
  author: Author;
  body: string;
  dateCreated: Date;
  id: string;
}
