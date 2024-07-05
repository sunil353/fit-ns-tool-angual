import { TestBed } from '@angular/core/testing';

import { FitNsToolService } from './fit-ns-tool.service';

describe('FitNsToolService', () => {
  let service: FitNsToolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitNsToolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
