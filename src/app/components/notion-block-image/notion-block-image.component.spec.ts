import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionBlockImageComponent } from './notion-block-image.component';

describe('NotionBlockImageComponent', () => {
  let component: NotionBlockImageComponent;
  let fixture: ComponentFixture<NotionBlockImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotionBlockImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotionBlockImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
