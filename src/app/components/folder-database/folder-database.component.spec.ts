import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderDatabaseComponent } from './folder-database.component';

describe('FolderDatabaseComponent', () => {
  let component: FolderDatabaseComponent;
  let fixture: ComponentFixture<FolderDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderDatabaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FolderDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
