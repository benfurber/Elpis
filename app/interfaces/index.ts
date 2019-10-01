import { NavigationScreenProp } from "react-navigation";

export interface Author {
  avatarPath: string;
  name: string;
}

export interface Feed {
  feed: [Post];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NavigationType = NavigationScreenProp<any, any>;

interface ContentBase {
  author: Author;
  content: string | null;
  createdAt: Date;
  id: string;
  imagePath?: string;
}

export interface Comment extends ContentBase {
  replies: Reply[] | [];
  totalReplies: number;
}

export interface Post extends ContentBase {
  comments: Comment[] | [];
  createdAt: Date;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Reply extends ContentBase {}

export interface Notification {
  content: ContentBase;
  newNotification: boolean;
  type: string; // should be `"comment" | "post"` but there's a bug;
  postId?: string;
}
