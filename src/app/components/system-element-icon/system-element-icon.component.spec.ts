import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemElementIconComponent } from './system-element-icon.component';

describe('SystemElementIconComponent', () => {
  let component: SystemElementIconComponent;
  let fixture: ComponentFixture<SystemElementIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemElementIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SystemElementIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
