import { TestBed } from '@angular/core/testing';

import { VvrayonimageService } from './vvrayonimage.service';

describe('VvrayonimageService', () => {
  let service: VvrayonimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VvrayonimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
