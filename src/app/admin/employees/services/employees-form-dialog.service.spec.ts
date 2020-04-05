import { TestBed } from '@angular/core/testing';

import { EmployeesFormDialogService } from './employees-form-dialog.service';

describe('EmployeesFormDialogService', () => {
  let service: EmployeesFormDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesFormDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
