import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionItemTagsComponent } from './notion-item-tags.component';

describe('NotionItemTagsComponent', () => {
  let component: NotionItemTagsComponent;
  let fixture: ComponentFixture<NotionItemTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotionItemTagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotionItemTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
