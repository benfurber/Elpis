import { NavigationScreenProp } from "react-navigation";

export interface Author {
  avatarPath: NodeRequire;
}

export type NavigationType = NavigationScreenProp<any, any>;

export interface Post {
  author: Author;
  date: Date;
  description: string | null;
  id: string;
  imagePath: NodeRequire;
}
