import { TestBed } from '@angular/core/testing';

import { ApiQueryService } from './api-query.service';

describe('ApiQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiQueryService = TestBed.get(ApiQueryService);
    expect(service).toBeTruthy();
  });
});
