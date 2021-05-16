import { TestBed } from '@angular/core/testing';

import { DatashareService } from './datashare.service';

describe('DatashareService', () => {
  let service: DatashareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatashareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
