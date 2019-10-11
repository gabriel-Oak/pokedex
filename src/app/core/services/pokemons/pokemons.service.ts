import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  pokemons: any;
  loading: boolean;


  constructor(
    private http: HttpClient
  ) { }

  getPokemons(): void {
    if (!this.loading) {
      this.loading = true;
      this.http.get(`${environment.api}/pokemon`)
      .subscribe(
        res => this.pokemons = res,
        null, () => this.loading = false
      );
    }
  }

  getNextPage(): void {
    if (this.pokemons) {
      this.loading = true;
      this.http.get(this.pokemons.next)
        .subscribe(
          res => this.pokemons = res,
          null, () => this.loading = false
        );
    }
  }

  getPreviusPage(): void {
    if (this.pokemons) {
      this.loading = true;
      this.http.get(this.pokemons.previous)
      .subscribe(
        res => this.pokemons = res,
        null, () => this.loading = false
      );
    }
  }

  getPokemon(url: string): Observable<any> {
    return this.http.get(url);
  }
}
