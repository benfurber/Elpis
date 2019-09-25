import { NavigationScreenProp } from "react-navigation";

export interface Author {
  avatarPath: string;
  name: string;
}

export interface Comment {
  author: Author;
  content: string;
  createdAt: Date;
  id: string;
  replies: Reply[] | [];
  totalReplies: number;
}

export interface Feed {
  feed: [Post];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NavigationType = NavigationScreenProp<any, any>;

export interface Notification {
  author: Author;
  content: Post["content"];
  date: Date;
  type: string;
}

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
  content: string;
  createdAt: Date;
  id: string;
}
