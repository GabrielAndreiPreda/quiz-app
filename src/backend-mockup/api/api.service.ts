import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Question } from 'src/interfaces/question.interface';
import { QuestionAnswerProviderService } from '../providers/question-answer-provider.service';
import { map } from 'rxjs/operators';
import { QuestionAnswers } from 'src/interfaces/question-answers.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private data = this.questionProviderService.generate();

  questions = new BehaviorSubject<Question[]>(this.data[0]);
  questionsLength = new BehaviorSubject<number>(this.data[0].length);

  questionAnswers = new BehaviorSubject<QuestionAnswers[]>(this.data[1]);
  answerTable = new BehaviorSubject<QuestionAnswers[]>(
    this.generateAnswerTable()
  );

  constructor(private questionProviderService: QuestionAnswerProviderService) {}

  getQuestions(from = 0, limit = 100) {
    return this.questions.pipe(
      map((questionArray) => questionArray.slice(from, from + limit))
    );
  }
  getQuestion(index: number) {
    return this.questions.pipe(map((questionArray) => questionArray[index]));
  }

  getQuestionsLength() {
    return this.questionsLength.pipe();
  }

  getAnswerTable() {
    return this.answerTable.pipe();
  }

  validateQuestions(questionAnswers: QuestionAnswers[]): Observable<{
    score: number;
    questionAnswers?: QuestionAnswers[];
  }> {
    // TODO validate anwsers, and return score + invalid answer ids
    return of({ score: 100 });
  }
  generateAnswerTable() {
    var auxTable: QuestionAnswers[] = [];
    this.questions.value.forEach((item) => {
      var answerTableItem: QuestionAnswers = {
        questionId: item.id,
        answerIds: [],
      };
      auxTable.push(answerTableItem);
    });
    return auxTable;
  }
}
