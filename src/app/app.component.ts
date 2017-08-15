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
      .then(pokemon => {
          this.pokemones[pokemon.id - 1] = pokemon;
          alert("Pokemon guardado");});
      this.pokemon = null;

  }

  cancel(): void {
    console.log(this.pokemon);
    console.log(this.original_pokemon);

    this.pokemon = this.original_pokemon;

    console.log(this.pokemon);
  }

  onSelect(pokemon: Pokemon): void {
    console.log(this.pokemon);
    console.log(this.original_pokemon);
    console.log(Object.assign({}, pokemon));

    this.original_pokemon =  pokemon;
    this.pokemon = Object.assign({}, pokemon);

    console.log(this.pokemon);
    console.log(this.original_pokemon);
    //this.pokemon = Object.assign({}, pokemon);
  }

}
