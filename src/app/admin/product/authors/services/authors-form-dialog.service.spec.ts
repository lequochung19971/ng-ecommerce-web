import { TestBed } from '@angular/core/testing';

import { AuthorsFormDialogService } from './authors-form-dialog.service';

describe('AuthorsFormDialogService', () => {
  let service: AuthorsFormDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorsFormDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
