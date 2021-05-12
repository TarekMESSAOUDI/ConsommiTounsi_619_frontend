import { TestBed } from '@angular/core/testing';

import { AuthorizedepmantguardService } from './authorizedepmantguard.service';

describe('AuthorizedepmantguardService', () => {
  let service: AuthorizedepmantguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizedepmantguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
