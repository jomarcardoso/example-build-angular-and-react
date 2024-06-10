import { TestBed } from '@angular/core/testing';

import { LibAngularService } from './lib-angular.service';

describe('LibAngularService', () => {
  let service: LibAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
