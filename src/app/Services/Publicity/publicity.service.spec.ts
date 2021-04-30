import { TestBed } from '@angular/core/testing';

import { PublicityService } from './publicity.service';

describe('PublicityService', () => {
  let service: PublicityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
