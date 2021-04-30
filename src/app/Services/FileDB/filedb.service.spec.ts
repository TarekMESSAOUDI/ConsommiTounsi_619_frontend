import { TestBed } from '@angular/core/testing';

import { FiledbService } from './filedb.service';

describe('FiledbService', () => {
  let service: FiledbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiledbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
