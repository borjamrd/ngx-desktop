import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionBlockComponent } from './notion-block.component';

describe('NotionBlockComponent', () => {
  let component: NotionBlockComponent;
  let fixture: ComponentFixture<NotionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotionBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
