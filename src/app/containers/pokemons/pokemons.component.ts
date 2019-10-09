import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app/app.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  constructor(
    private app: AppService
  ) { }

  ngOnInit() {
    this.app.setClass('grass');
    this.app.setTitle('Pokemons');
  }

}
