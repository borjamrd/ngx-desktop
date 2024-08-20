import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionContainerComponent } from './notion-container.component';

describe('NotionContainerComponent', () => {
  let component: NotionContainerComponent;
  let fixture: ComponentFixture<NotionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotionContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
