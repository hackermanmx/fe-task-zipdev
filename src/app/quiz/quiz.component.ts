import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class QuizComponent implements OnInit {
  labels = [
    'How do you describe yourself as a developer?',
    'Select the JavaScript based technologies:',
    'Let\'s try typing a palindrome:',
    'Let\'s enter simple sentences:',

  ];
  questions = {
    first: [ {value: 'Hermit'}, {value:'Sociable'}, {value:'Serious'}, {value:'Grumpy'}, {value:'do not know yet'}],
    second: [
      {value:'AngularJS', valid: true},
      {value:'Ember', valid: true},
      {value:'VueJS', valid: true},
      {value:'Java', valid: false},
      {value:'C#', valid: false}
    ],
  };
  form = {
   first: null,
   second: [false, false, false, false, false],
   third: null,
   fourth: {
     sentence1: null,
     sentence2: null
   },
  };
  isPalindrome = CommonService.isPalindrome;

  constructor() { }

  ngOnInit() {

  }

  checkProgress() {
    let progress = 0;
    const addProgress = () => progress += 25;

    if (this.form.first) {
      addProgress();
    }
    if (this.form.second.filter(e => e).length) {
      addProgress();
    }
    if (this.form.third) {
      addProgress();
    }
    if (this.form.fourth.sentence1 && this.form.fourth.sentence2) {
      addProgress();
    }

    return progress;
  }
}
