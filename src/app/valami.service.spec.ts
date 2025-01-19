import { TestBed } from '@angular/core/testing';

import { ValamiService } from './valami.service';

describe('SimpleService', () => {
  let service: ValamiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValamiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});