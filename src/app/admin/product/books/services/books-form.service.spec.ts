import { TestBed } from '@angular/core/testing';

import { BooksFormService } from './books-form.service';

describe('BooksFormService', () => {
  let service: BooksFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
