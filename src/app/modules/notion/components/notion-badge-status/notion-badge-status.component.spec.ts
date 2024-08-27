import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionBadgeStatusComponent } from './notion-badge-status.component';

describe('NotionBadgeStatusComponent', () => {
  let component: NotionBadgeStatusComponent;
  let fixture: ComponentFixture<NotionBadgeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotionBadgeStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotionBadgeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
