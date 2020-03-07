import { NavigationStackProp } from "react-navigation-stack";

export interface Author {
  id: string;
  avatarPath: string;
  name: string;
}

export interface Feed {
  feed: [Post];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NavigationType = NavigationStackProp<any, any>;

interface ContentBase {
  author: Author;
  content: string | null;
  id: string;
  imagePath?: string;
  publishedAt: Date;
  title?: string;
}

export interface Comment extends ContentBase {
  edited: boolean;
  replies: Reply[] | [];
  totalReplies: number;
  isAuthorCurrentUser: boolean;
}

export interface Post extends ContentBase {
  comments: Comment[] | [];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Reply extends ContentBase {
  comment: Comment;
  edited: boolean;
  link: string | null;
  isAuthorCurrentUser: boolean;
}

export interface Notification {
  id: string;
  createdAt: Date;
  content: {
    post: ContentBase;
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
