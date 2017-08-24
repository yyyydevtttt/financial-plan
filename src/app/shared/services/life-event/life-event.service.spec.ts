import { TestBed, inject } from '@angular/core/testing';

import { LifeEventService } from './life-event.service';

describe('LifeEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LifeEventService]
    });
  });

  it('should be created', inject([LifeEventService], (service: LifeEventService) => {
    expect(service).toBeTruthy();
  }));
});
