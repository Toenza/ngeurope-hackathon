import { TestBed, inject } from '@angular/core/testing';

import { GetAccessTokenService } from './get-access-token.service';

describe('GetAccessTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAccessTokenService]
    });
  });

  it('should be created', inject([GetAccessTokenService], (service: GetAccessTokenService) => {
    expect(service).toBeTruthy();
  }));
});
