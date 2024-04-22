import { TestBed } from '@angular/core/testing';

import { BasketServiceAgent } from './basket.service-agent';

describe('BasketServiceAgent', () => {
  let service: BasketServiceAgent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketServiceAgent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
