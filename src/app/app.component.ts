import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'pokemones',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PokemonService]
})

export class AppComponent implements OnInit {
  title = 'Pokedex';
  pokemones: Pokemon[];
  pokemon: Pokemon;
  original_pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemones();
  }

  getPokemones(): void {
    this.pokemonService.getPokemones().then(pokemones => this.pokemones = pokemones);
  }

  save(): void {
    this.pokemonService.update(this.pokemon)
      .then(pokemon => alert("Pokemon guardado"));
      this.pokemon = null;

  }

  cancel(): void {
    this.pokemon = this.original_pokemon;
  }

  onSelect(pokemon: Pokemon): void {
    this.original_pokemon = pokemon;
    this.pokemon = pokemon;
    //this.pokemon = Object.assign({}, pokemon);
  }

}
