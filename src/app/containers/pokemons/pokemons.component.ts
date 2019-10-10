import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app/app.service';
import { PokemonsService } from 'src/app/core/services/pokemons/pokemons.service';

@Component({
    selector: 'app-pokemons',
    templateUrl: './pokemons.component.html',
    styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

    loadConter: number;

    constructor(
        private app: AppService,
        public pokeservice: PokemonsService
    ) {
        this.loadConter = 0;
    }

    ngOnInit() {
        this.app.setClass('grass');
        this.app.setTitle('Pokemons');
        this.pokeservice.getPokemons();
    }

    loaded() {
        this.loadConter++;
    }
}
