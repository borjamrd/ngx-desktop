import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionDatabaseItemComponent } from './notion-database-item.component';

describe('NotionDatabaseItemComponent', () => {
  let component: NotionDatabaseItemComponent;
  let fixture: ComponentFixture<NotionDatabaseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotionDatabaseItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotionDatabaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
