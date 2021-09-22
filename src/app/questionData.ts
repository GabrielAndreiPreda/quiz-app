import { Answer } from './answer';

export interface QuestionData {
  id: number;
  questionText: string;
  multipleChoice: boolean;
  correctAnswerId: number;
  answerGroup: Answer[];
}
