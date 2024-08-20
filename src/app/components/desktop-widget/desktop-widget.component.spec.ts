import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopWidgetComponent } from './desktop-widget.component';

describe('DesktopWidgetComponent', () => {
  let component: DesktopWidgetComponent;
  let fixture: ComponentFixture<DesktopWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesktopWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
