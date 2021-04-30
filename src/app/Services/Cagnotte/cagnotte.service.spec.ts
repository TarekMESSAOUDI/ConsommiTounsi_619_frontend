import { TestBed } from '@angular/core/testing';

import { CagnotteService } from './cagnotte.service';

describe('CagnotteService', () => {
  let service: CagnotteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CagnotteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
