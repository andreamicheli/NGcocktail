import { TestBed } from '@angular/core/testing';

import { DatakeepService } from './datakeep.service';

describe('DatakeepService', () => {
  let service: DatakeepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatakeepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
