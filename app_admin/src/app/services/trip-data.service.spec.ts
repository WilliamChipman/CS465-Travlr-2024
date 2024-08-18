import { TestBed } from '@angular/core/testing';

import { TripDataService } from './trip-data.service';

describe('TripDataService', () => {
  let service: TripDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
