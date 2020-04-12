import { TestBed } from '@angular/core/testing';

import { PublishersFormDialogService } from './publishers-form-dialog.service';

describe('PublishersFormDialogService', () => {
  let service: PublishersFormDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublishersFormDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
