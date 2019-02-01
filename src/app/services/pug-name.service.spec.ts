import { TestBed } from '@angular/core/testing';

import { PugNameService } from './pug-name.service';

describe('PugNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PugNameService = TestBed.get(PugNameService);
    expect(service).toBeTruthy();
  });
});
