import { TestBed } from '@angular/core/testing';

import { InputConsumerService } from './input-consumer.service';

describe('InputConsumerService', () => {
  let service: InputConsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputConsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
