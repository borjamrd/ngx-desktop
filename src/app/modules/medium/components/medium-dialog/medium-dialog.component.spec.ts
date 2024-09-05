import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumDialogComponent } from './medium-dialog.component';

describe('MediumContainerComponent', () => {
  let component: MediumDialogComponent;
  let fixture: ComponentFixture<MediumDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MediumDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
