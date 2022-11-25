export type PostType = {
  id: string;
  creationDate: string;
  author: string;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  tags: string[];
  answers: AnswerType[];
};

export type AnswerType = {
  id: string;
  author: string;
  content: string;
  creationDate: string;
};

export type PostsListType = Omit<PostType, "answers">[];

export type PostThumbType = Omit<PostType, "answers">;
