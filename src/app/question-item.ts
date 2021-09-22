import { Answer } from './answer';

export interface QuestionItem {
  id: number;
  multipleChoice: boolean;
  questionText: string;
  answerGroup: Answer[];
}
