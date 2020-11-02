import { TestBed } from '@angular/core/testing';

import { LqhShellService } from './lqh-shell.service';

describe('LqhShellService', () => {
  let service: LqhShellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LqhShellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
