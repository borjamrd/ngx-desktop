import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksbarComponent } from './tasksbar.component';

describe('TasksbarComponent', () => {
  let component: TasksbarComponent;
  let fixture: ComponentFixture<TasksbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
