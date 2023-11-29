import { TestBed } from '@angular/core/testing';

import { CompensationTypeService } from './compensation-type.service';

describe('CompensationTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompensationTypeService = TestBed.get(CompensationTypeService);
    expect(service).toBeTruthy();
  });
});
