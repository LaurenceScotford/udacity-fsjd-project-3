import { TestBed } from '@angular/core/testing';

import { StoreDataService } from './store-data.service';

describe('StoreDataServiceService', () => {
  let service: StoreDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
