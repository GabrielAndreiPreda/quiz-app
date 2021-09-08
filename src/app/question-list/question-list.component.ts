import { Component, OnInit } from '@angular/core';
import { QuestionItem } from '../question-item';
import { QuestionProviderService } from '../question-provider.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {
  constructor(private questionProviderService: QuestionProviderService) {}
  questionItems: QuestionItem[] = this.questionProviderService.getItems();

  ngOnInit(): void {}
}
