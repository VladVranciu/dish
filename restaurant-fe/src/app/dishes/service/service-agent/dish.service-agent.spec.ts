import { TestBed } from '@angular/core/testing';

import { DishServiceAgent } from './dish.service-agent';

describe('DishServiceAgent', () => {
  let service: DishServiceAgent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishServiceAgent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
