import { TestBed } from '@angular/core/testing';

import { MeCookiesService } from './me-cookies.service';

describe('MeCookiesService', () => {
  let service: MeCookiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeCookiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
