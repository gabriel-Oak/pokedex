import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokemonsComponent } from './pokemons.component';
import { PokecardComponent } from './pokecard/pokecard.component';

describe('PokemonsComponent', () => {
  let component: PokemonsComponent;
  let fixture: ComponentFixture<PokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PokemonsComponent,
        PokecardComponent
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve incrementar o contador de loading', () => {
    component.loaded();
    expect(component.loadConter).toBe(1);
  });
});
