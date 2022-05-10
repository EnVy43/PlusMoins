import { TestBed } from '@angular/core/testing';

import { CheckAllService } from './check-all.service';

describe('CheckAllService', () => {
  let service: CheckAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
