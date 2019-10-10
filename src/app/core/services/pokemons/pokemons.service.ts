import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  pokemons: any;


  constructor(
    private http: HttpClient
  ) { }

  getPokemons(): void {
    this.http.get(`${environment.api}/pokemon`)
      .subscribe(
        res => this.pokemons = res
      );
  }

  getNextPage(): void {
    this.http.get(this.pokemons.next)
      .subscribe(
        res => this.pokemons = res
      );
  }

  getPreviusPage(): void {
    this.http.get(this.pokemons.previus)
      .subscribe(
        res => this.pokemons = res
      );
  }
}
