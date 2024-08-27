import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualGridComponent } from './virtual-grid.component';

describe('VirtualGridComponent', () => {
  let component: VirtualGridComponent;
  let fixture: ComponentFixture<VirtualGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VirtualGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
