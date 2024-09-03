import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionDialogComponent } from './notion-dialog.component';

describe('NotionDialogComponent', () => {
  let component: NotionDialogComponent;
  let fixture: ComponentFixture<NotionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotionDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NotionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
