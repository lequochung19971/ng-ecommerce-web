import { TestBed } from '@angular/core/testing';

import { SuppliersFormDialogService } from './suppliers-form-dialog.service';

describe('SuppliersFormDialogService', () => {
  let service: SuppliersFormDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppliersFormDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
