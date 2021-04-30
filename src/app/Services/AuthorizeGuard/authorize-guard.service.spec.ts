import { TestBed } from '@angular/core/testing';

import { AuthorizeGuardService } from './authorize-guard.service';

describe('AuthorizeGuardService', () => {
  let service: AuthorizeGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizeGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
