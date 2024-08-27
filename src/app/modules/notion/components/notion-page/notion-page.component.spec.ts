import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionPageComponent } from './notion-page.component';

describe('NotionPageComponent', () => {
  let component: NotionPageComponent;
  let fixture: ComponentFixture<NotionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
