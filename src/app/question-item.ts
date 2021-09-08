import { Answer } from './answer';
import { Question } from './question';

export interface QuestionItem {
  id: number;
  question: Question;
  correctAnswerId: number;
  answerGroup: { parentId: number; answers: Answer[] };
}
