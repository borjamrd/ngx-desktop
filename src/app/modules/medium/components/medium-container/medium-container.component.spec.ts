import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumContainerComponent } from './medium-container.component';

describe('MediumContainerComponent', () => {
  let component: MediumContainerComponent;
  let fixture: ComponentFixture<MediumContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediumContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
