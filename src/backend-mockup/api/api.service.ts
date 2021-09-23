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
  data = this.questionProviderService.generate();

  questions = new BehaviorSubject<Question[]>(this.data[0]);
  questionAnswers = new BehaviorSubject<QuestionAnswers[]>(this.data[1]);
  constructor(private questionProviderService: QuestionAnswerProviderService) {}

  getQuestions(from = 0, limit = 100) {
    return this.questions.pipe(map((x) => x.slice(from, from + limit)));
  }

  validateQuestions(questionAnswers: QuestionAnswers[]): Observable<{
    score: number;
    questionAnswers?: QuestionAnswers[];
  }> {
    // TODO validate anwsers, and return score + invalid answer ids
    return of({ score: 100 });
  }
}
