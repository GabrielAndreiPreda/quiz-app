import { Answer } from './answer';

export interface QuestionItem {
  id: number;
  questionText: string;
  correctAnswerId: number;
  answerGroup: Answer[];
}
