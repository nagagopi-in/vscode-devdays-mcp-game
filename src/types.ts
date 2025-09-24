export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number; // index of correct option
};

export type GameState = {
  current: number;
  score: number;
  completed: boolean;
};
