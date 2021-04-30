import { TestBed } from '@angular/core/testing';

import { ImageuserService } from './imageuser.service';

describe('ImageuserService', () => {
  let service: ImageuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
