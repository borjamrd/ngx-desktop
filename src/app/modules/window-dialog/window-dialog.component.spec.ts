import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowContainerComponent } from './window-dialog.component';

describe('WindowContainerComponent', () => {
  let component: WindowContainerComponent;
  let fixture: ComponentFixture<WindowContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowContainerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WindowContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
