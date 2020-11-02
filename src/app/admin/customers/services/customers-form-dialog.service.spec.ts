import { TestBed } from '@angular/core/testing';

import { CustomersFormDialogService } from './customers-form-dialog.service';

describe('CustomersFormDialogService', () => {
  let service: CustomersFormDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersFormDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
