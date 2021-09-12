import { Answer } from './answer';
import { Question } from './question';

export interface QuestionItem {
  id: number;
  questionText: string;
  correctAnswerId: number;
  answerGroup: Answer[];
}
