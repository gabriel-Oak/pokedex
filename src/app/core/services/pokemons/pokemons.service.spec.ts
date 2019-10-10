import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokemonsService } from './pokemons.service';

describe('PokemonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: PokemonsService = TestBed.get(PokemonsService);
    expect(service).toBeTruthy();
  });
});
