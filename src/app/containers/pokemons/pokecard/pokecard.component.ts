import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonsService } from 'src/app/core/services/pokemons/pokemons.service';

@Component({
    selector: 'app-pokecard',
    templateUrl: './pokecard.component.html',
    styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent implements OnInit {

    pokemon: any;
    color: string;

    @Input() inputData: any;
    @Output() loaded: EventEmitter<void> = new EventEmitter();

    constructor(private pokeservice: PokemonsService) {
    }

    ngOnInit() {
        this.getPokemon();
    }

    getPokemon() {
        this.pokeservice
            .getPokemon(this.inputData.url)
            .subscribe(
                res => {
                    this.pokemon = res;
                    this.color = this.pokemon.types
                        .filter(type => type.slot === 1)
                        [0].type.name;

                    this.loaded.emit();
                },
                error => this.getPokemon()
            );
    }

}
