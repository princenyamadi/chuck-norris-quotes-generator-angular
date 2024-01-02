import { TestBed } from '@angular/core/testing';

import { ChuckyServiceService } from './chucky-service.service';

describe('ChuckyServiceService', () => {
  let service: ChuckyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
