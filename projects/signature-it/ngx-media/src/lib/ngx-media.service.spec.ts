import { TestBed } from '@angular/core/testing';

import { NgxMediaService } from './ngx-media.service';

describe('NgxMediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMediaService = TestBed.get(NgxMediaService);
    expect(service).toBeTruthy();
  });
});
