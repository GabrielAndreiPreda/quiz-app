import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss'],
})
export class ScoreCardComponent {
  constructor() {}

  // score = this.scoreService.score;
  // maxScore = this.scoreService.maxScore;
  // goodScore: boolean = this.setScoreRatio();
  setScoreRatio() {
    // if (this.maxScore / this.score <= 1.3) {
    //   return true;
    // } else return false;
  }

  ngOnInit(): void {}
}
