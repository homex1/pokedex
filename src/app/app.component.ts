import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';
import { HttpModule } from '@angular/http';

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

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemones();
  }

  getPokemones(): void {
    this.pokemonService.getPokemones().then(pokemones => this.pokemones = pokemones);
  }

  onSelect(pokemon: Pokemon, index: number): void {
    this.pokemon  = pokemon;
  }

}
