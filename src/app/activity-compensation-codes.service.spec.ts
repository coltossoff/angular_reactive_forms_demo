import { TestBed } from '@angular/core/testing';

import { ActivityCompensationCodesService } from './activity-compensation-codes.service';

describe('ActivityCompensationCodesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityCompensationCodesService = TestBed.get(ActivityCompensationCodesService);
    expect(service).toBeTruthy();
  });
});
