import { Answer } from './answer.interface';

export interface Question {
  id: number;
  isMultipleChoice: boolean;
  text: string;
  availableAnswers: Answer[];
}
