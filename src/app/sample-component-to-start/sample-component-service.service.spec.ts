import { TestBed } from '@angular/core/testing';

import { SampleComponentServiceService } from './sample-component-service.service';

describe('SampleComponentServiceService', () => {
  let service: SampleComponentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleComponentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
