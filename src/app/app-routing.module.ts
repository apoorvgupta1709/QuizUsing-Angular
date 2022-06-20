import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizQComponent } from './quiz-q/quiz-q.component';

const routes: Routes = [
  {path:'questions',component:QuizQComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
