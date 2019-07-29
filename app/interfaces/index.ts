import { NavigationScreenProp } from "react-navigation";

export interface Author {
  avatarPath: NodeRequire;
  name: string;
}

export interface Comment {
  author: Author;
  content: string;
  createdAt: Date;
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
  content: string | null;
  date?: Date;
  id: string;
  imagePath: string;
}

export interface Reply {
  author: Author;
  body: string;
  dateCreated: Date;
  id: string;
}
