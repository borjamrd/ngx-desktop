import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveFoldersComponent } from './active-folders.component';

describe('ActiveFoldersComponent', () => {
  let component: ActiveFoldersComponent;
  let fixture: ComponentFixture<ActiveFoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveFoldersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
