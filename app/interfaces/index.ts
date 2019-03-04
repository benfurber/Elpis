export interface Author {
  avatarPath: NodeRequire;
}

export interface Post {
  author: Author;
  date: Date;
  description: string;
  id: string;
  imagePath: NodeRequire;
}
