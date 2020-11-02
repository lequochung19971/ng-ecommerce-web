import { TestBed } from '@angular/core/testing';

import { BooksFormDialogService } from './books-form-dialog.service';

describe('BooksFormDialogService', () => {
  let service: BooksFormDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksFormDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
