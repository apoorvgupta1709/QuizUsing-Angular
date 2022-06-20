import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quiz App';
  c!:HTMLUListElement;

  optionClick(b:HTMLUListElement){
    this.c=b;
    this.c.hidden=true;
  }
}
