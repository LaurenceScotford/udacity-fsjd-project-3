import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductListService } from './product-list.service';

describe('ProductListService', () => {
  let service: ProductListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
