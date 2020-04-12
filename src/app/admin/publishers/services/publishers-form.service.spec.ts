import { TestBed } from '@angular/core/testing';

import { PublishersFormService } from './publishers-form.service';

describe('PublishersFormService', () => {
  let service: PublishersFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublishersFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
