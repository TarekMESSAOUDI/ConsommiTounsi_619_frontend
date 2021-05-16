import { TestBed } from '@angular/core/testing';

import { AuthorizeforgotguardServiceService } from './authorizeforgotguard-service.service';

describe('AuthorizeforgotguardServiceService', () => {
  let service: AuthorizeforgotguardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizeforgotguardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
