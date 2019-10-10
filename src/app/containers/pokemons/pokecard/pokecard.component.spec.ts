import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';

import { PokecardComponent } from './pokecard.component';

describe('PokecardComponent', () => {
    let component: PokecardComponent;
    let fixture: ComponentFixture<PokecardComponent>;
    let httpMock: HttpTestingController;
    const mock = {
        sprites: { front_default: 'teste.com' },
        types: [
            { slot: 1, type: 'bug' }
        ]
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PokecardComponent],
            imports: [
                HttpClientTestingModule
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PokecardComponent);
        component = fixture.componentInstance;
        httpMock = TestBed.get(HttpTestingController);
        component.inputData = { url: 'testePokemon.com', name: 'pikachu' };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Deve buscar o pokemon [sucesso]', () => {
        const req = httpMock.expectOne('testePokemon.com');
        req.flush(mock);
    });

    it('Deve buscar o pokemon [erro]', () => {
        const req = httpMock.expectOne('testePokemon.com');
        req.error(new ErrorEvent(''));
    });
});
