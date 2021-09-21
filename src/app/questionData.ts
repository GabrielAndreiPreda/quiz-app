import { Answer } from './answer';

export interface QuestionData {
  id: number;
  questionText: string;
  correctAnswerId: number;
  answerGroup: Answer[];
}
