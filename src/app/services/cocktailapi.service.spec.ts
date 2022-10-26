import { TestBed } from '@angular/core/testing';

import { CocktailapiService } from './cocktailapi.service';

describe('CocktailapiService', () => {
  let service: CocktailapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
