import { Component, OnInit, Input } from '@angular/core';
// models
import { IQuestion } from '../../shared/models/IQuestion.model';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.css', '../../shared/styles/general.css']
})
export class QuestionBoxComponent implements OnInit {
  @Input() question: IQuestion;

  radioName: string = 'questionRadioName';

  constructor() { }

  ngOnInit() {
    this.radioName = this.question.questionCategoryName.replace(' ', '');
  }
  onChangeSelection(id: number){
    this.question.selectedQuestionId = id;
  }
}