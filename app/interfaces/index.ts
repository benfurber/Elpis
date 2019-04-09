import { NavigationScreenProp } from "react-navigation";

export interface Author {
  avatarPath: NodeRequire;
  name: String;
}

export interface Comment {
  author: Author;
  body: string;
  dateCreated: Date;
  id: string;
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
