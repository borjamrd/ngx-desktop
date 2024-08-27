import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumPostComponent } from './medium-post.component';

describe('MediumPostComponent', () => {
  let component: MediumPostComponent;
  let fixture: ComponentFixture<MediumPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediumPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
