import { TestBed } from '@angular/core/testing';

import { UnifiedProfileService } from './unified-profile.service';

describe('UnifiedProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnifiedProfileService = TestBed.get(UnifiedProfileService);
    expect(service).toBeTruthy();
  });
});
