import { TestBed } from '@angular/core/testing';

import { AuthorsFormService } from './authors-form.service';

describe('AuthorsFormService', () => {
  let service: AuthorsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
