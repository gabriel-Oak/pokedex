import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokemonsService } from './pokemons.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const mock = {
    next: 'teste.com/next',
    previous: 'teste.com/previus',
    results: [
        { name: 'pikachu', url: 'teste.com' }
    ]
};

describe('PokemonsService', () => {
    let httpMock: HttpTestingController;
    let service: PokemonsService;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, HttpClientModule],
        providers: [PokemonsService]
    }));

    beforeEach(() => {
        service = TestBed.get(PokemonsService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Deve buscar a lista de pokemons', () => {
        service.getPokemons();

        const req = httpMock.expectOne(
            `${environment.api}/pokemon`
        );

        req.flush(mock);

        expect(service.pokemons.results[0].name)
            .toBe('pikachu');
    });

    it('Deve não buscar a lista de pokemons', () => {
        service.loading = true;

        service.getPokemons();

        const req = httpMock.expectNone(
            `${environment.api}/pokemon`
        );
    });

    it('Deve buscar a proxima pagina de pokemons', () => {
        service.pokemons = mock;
        service.getNextPage();

        const req = httpMock.expectOne(mock.next);
        req.flush(mock);
    });

    it('Deve buscar a pagina anterior de pokemons', () => {
        service.pokemons = mock;
        service.loading = false;

        service.getPreviusPage();
        const req = httpMock.expectOne(mock.previous);
        req.flush(mock);
    });

    it('Deve buscar um pokemon', () => {
        let poke;
        service.getPokemon('pokemon.com')
            .subscribe(
                res => poke = res
            );

        const req = httpMock.expectOne('pokemon.com');
        req.flush({ name: 'mario' });

        expect(poke.name).toBe('mario');
    });
});
