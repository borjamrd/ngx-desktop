import { TestBed } from '@angular/core/testing';

import { MediumService } from './medium.service';

describe('MediumService', () => {
  let service: MediumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
