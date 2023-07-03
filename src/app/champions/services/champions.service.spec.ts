import { TestBed } from '@angular/core/testing';

import { ChampionsService } from './champions.service';

describe('CharactersService', () => {
  let service: ChampionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
