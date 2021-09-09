import { Component, Input } from '@angular/core';
import { QuestionItem } from '../question-item';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent {
  @Input() questionItem!: QuestionItem;

  constructor() {}

  ngOnInit(): void {}
}
