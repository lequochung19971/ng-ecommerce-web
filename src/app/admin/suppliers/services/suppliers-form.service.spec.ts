import { TestBed } from '@angular/core/testing';

import { SuppliersFormService } from './suppliers-form.service';

describe('SuppliersFormService', () => {
  let service: SuppliersFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppliersFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
