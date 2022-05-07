import { TestBed } from '@angular/core/testing';

import { GoalscorersService } from './goalscorers.service';

describe('GoalscorersService', () => {
  let service: GoalscorersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalscorersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
