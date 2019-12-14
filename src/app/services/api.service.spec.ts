import { TestBed } from '@angular/core/testing';

import { UserAccountService } from './userAccount.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAccountService = TestBed.get(UserAccountService);
    expect(service).toBeTruthy();
  });
});
