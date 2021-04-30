import { TestBed } from '@angular/core/testing';

import { UndercategoryService } from './undercategory.service';

describe('UndercategoryService', () => {
  let service: UndercategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UndercategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
