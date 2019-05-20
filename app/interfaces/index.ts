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
  replies: Reply[] | [];
  title: string;
  totalReplies: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NavigationType = NavigationScreenProp<any, any>;

export interface Post {
  author: Author;
  comments: Comment[] | [];
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
