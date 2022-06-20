import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQComponent } from './quiz-q.component';

describe('QuizQComponent', () => {
  let component: QuizQComponent;
  let fixture: ComponentFixture<QuizQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
