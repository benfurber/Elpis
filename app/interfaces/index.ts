export interface Author {
  avatarPath: NodeRequire;
}

export interface Post {
  author: Author;
  date: Date;
  description: string | null;
  id: string;
  imagePath: NodeRequire;
}
