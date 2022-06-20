import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { QuizMockData } from '../mock-quiz-data';
import { Quiz } from '../Quiz';

@Component({
  selector: 'app-quiz-q',
  templateUrl: './quiz-q.component.html',
  styleUrls: ['./quiz-q.component.css']
})
export class QuizQComponent implements OnInit {
  quiz: Quiz[] = [];

  isCorrect: Boolean = false;
  ele!: HTMLDivElement;

  selectedAnswer: string = "";
  question: string = "";
  options: string[] = [];
  answer: number = 0;
  id: number = 0;


  constructor() {
    this.quiz =   this.shuffle(QuizMockData.questionss);
  

    this.quiz.forEach(element => {
      this.question = element.data.questions;
      this.options = element.data.options;
      this.answer = element.data.answer;
      this.id = element.data.id;

    }
    );

  }

  ngOnInit(): void {
  }


  checkAnswer(b: HTMLButtonElement) {

    if (this.isCorrect) {
      this.ele.style.backgroundColor = "#008000";
      b.disabled = true;

    } else {
      this.ele.style.backgroundColor = "#FF0000";
      b.disabled = true;

    }

  }
  optionClick(option: string, b: HTMLButtonElement, c: HTMLDivElement) {
    b.disabled = false;
    this.ele = c;

    if (this.options[this.answer] === option) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }

  }

   shuffle(array:Quiz[]) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

}
