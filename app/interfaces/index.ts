import { NavigationStackProp } from "react-navigation-stack";

export interface User {
  id: string;
  avatarPath: string;
  email?: string;
  name: string;
  totalReplies?: number;
  totalTopics?: number;
}

export interface Feed {
  feed: [Post];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NavigationType = NavigationStackProp<any, any>;

interface ContentBase {
  content: string | null;
  id: string;
  imagePath?: string;
  publishedAt: Date;
  title?: string | null;
}

export interface Comment extends ContentBase {
  author: User;
  discussionLevel: number;
  edited: boolean;
  replies: Reply[] | [];
  totalReplies: number;
  isAuthorCurrentUser: boolean;
  post?: Post;
}

export interface Community {
  id: string;
  avatarPath: string;
  name: string;
  posts: Post[] | [];
}

export interface Post extends ContentBase {
  author: Community;
  comments: Comment[] | [];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Reply extends ContentBase {
  author: User;
  comment: Comment;
  edited: boolean;
  link: string | null;
  isAuthorCurrentUser: boolean;
}

export interface Message {
  author: User;
  content: string;
  createdAt: Date;
  id: string;
}

export interface Notification {
  id: string;
  createdAt: Date;
  content: {
    post: Post;
    reply: null | Reply;
    type: string; // should be `"comment" | "post"` but there's a bug;
  };
  newNotification: boolean;
}

interface Link {
  id: string;
  author: string;
  date: Date;
  description: string;
  image: string;
  publisher: string;
  title: string;
  url: string;
}
