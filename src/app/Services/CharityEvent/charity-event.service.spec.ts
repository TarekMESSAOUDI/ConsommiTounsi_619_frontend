import { TestBed } from '@angular/core/testing';

import { CharityEventService } from './charity-event.service';

describe('CharityEventService', () => {
  let service: CharityEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharityEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
