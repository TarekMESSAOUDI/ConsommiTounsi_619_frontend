import { TestBed } from '@angular/core/testing';

import { AuthorizedeliverymenguardService } from './authorizedeliverymenguard.service';

describe('AuthorizedeliverymenguardService', () => {
  let service: AuthorizedeliverymenguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizedeliverymenguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
